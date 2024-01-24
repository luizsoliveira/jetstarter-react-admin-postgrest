import React, { useRef, useEffect, useState, useId } from "react";
import {
  select,
  scaleLinear,
  scaleTime,
  extent,
  line,
  max,
  axisBottom,
  axisLeft,
  axisRight,
  zoom,
  zoomIdentity,
  timeParse,
} from "d3";
import useResizeObserver from "./useResizeObserver";

import './Chart.css'
import { Button, Skeleton } from "@mui/material";

import { DatasetRowProps } from "../types/datasetRow";

interface inputProps {
  data: DatasetRowProps[],
  title: string,
  feature_id: number,
}

/**
 * Component that renders a ZoomableLineChart
 */

export default function ZoomableLineChart(props: inputProps) {
  const svgRef = useRef();
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);
  const [currentZoomState, setCurrentZoomState] = useState();
  
  const [loading, setLoading] = useState(true)

  let zoomBehavior
  const id = useId()

  // const [data, setData] = useState(
  //   Array.from({ length: props.sample_length }, () => Math.round(Math.random() * 100))
  // );

  const data = props.data

  // will be called initially and on every data change
  useEffect(() => {
    let parseTime = timeParse("%Y-%m-%dT%H:%M:%S");

    data.forEach((d) => {
        d.date = parseTime(d.DATETIME);
        d.value = parseInt(d[`F${props.feature_id}`]);
        d.label = parseInt(d.LABEL);
    }); 

    //console.log(data)


    const svg = select(svgRef.current);
    const svgContent = svg.select(".content");
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // scales + line generator
    // const xScale = scaleLinear()
    //   .domain([0, data.length - 1])
    //   .range([10, width - 10]);
    const xScale = scaleTime()
      .domain(extent(data, (d) => { return d.date; }))
      .range([10, width - 10]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale.domain(newXScale.domain());
    }

    const y0Scale = scaleLinear()
      .domain([0, max(data, (d) => { return d.value; })])
      .range([height - 10, 10]);

    const y1Scale = scaleLinear()
    .domain([0, max(data, (d) => { return d.label; })])
    .range([height - 10, 10]);

    const lineGenerator = line()
    .x((d) => { return xScale(d.date); })
    .y((d) => { return y0Scale(d.value); });

    const lineGenerator2 = line()
    .x((d) => { return xScale(d.date); })
    .y((d) => { return y1Scale(d.label); });
      

    // render the line 1
    svgContent
      .selectAll(".myLine")
      .data([data])
      .join("path")
      .attr("class", "myLine")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 0.5)
      .attr("fill", "none")
      .attr("d", lineGenerator);

    // render the line 2
    svgContent
      .selectAll(".myLine2")
      .data([data])
      .join("path")
      .attr("class", "myLine2")
      .attr("stroke", "red")
      .attr("stroke-width", 0.5)
      .attr("fill", "none")
      .attr("d", lineGenerator2);

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    // Add the Y0 Axis
    svg
    .select(".y0-axis")
    .call(axisLeft(y0Scale));

    const y1Axis = axisRight(y1Scale)
    .tickValues([0,1]);

    // Add the Y1 Axis
    svg
    .select(".y1-axis")
    //This line transport the position of the secondary y axis
    .attr("transform", "translate( " + width + ", 0 )")
    .call(y1Axis);

    // zoom
    zoomBehavior = zoom()
      .scaleExtent([0.9, 3000])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", (event) => {
        const zoomState = event.transform;
        // console.log(zoomState)
        setCurrentZoomState(zoomState);
      });

    svg.call(zoomBehavior);

  }, [currentZoomState, data, dimensions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    })
  
    return () => {
      clearTimeout(timer)
    }
  }, [data])
  

  function reset() {
    const svg = select(svgRef.current);
    svg.transition().duration(750).call(
      zoomBehavior.transform,
      zoomIdentity
    );
  }

  function zoomIsChanged() {
    if (currentZoomState != undefined
      && currentZoomState.k != 1
    ) return true
    else return false
  }

  return (
    <React.Fragment>
      <div className="feature-container">
        
        <div className="feature-header">
          <span><b>F{props.feature_id}:</b> {props.title}</span>
          {zoomIsChanged() ? <Button variant="text" size="small" onClick={reset} style={{padding: "0px"}}>Reset</Button> : null }
        </div>
        
        <div className="zoomable-chart-container MuiSkeleton-root MuiSkeleton-wave" ref={wrapperRef} style={{ marginBottom: "2rem" }}>
            {
              loading ?
              <Skeleton variant={"rectangular"} height={`300px`}/>
              :
              <svg ref={svgRef}>
                <defs>
                  <clipPath id={id}>
                    <rect x="0" y="0" width="100%" height="100%" onClick={reset} />
                  </clipPath>
                </defs>
                <g className="content" clipPath={`url(#${id})`}></g>
                <g className="x-axis" />
                <g className="y0-axis" />
                <g className="y1-axis" />
              </svg>
            }
        </div>
        

      </div>
    </React.Fragment>
  );
}