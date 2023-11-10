import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface inputProps {
    data: Array,
    title: string,
    feature_id: number
}

export function LineChart(props: inputProps) {

    const [data, setData] = useState(props.data);

    // console.log(data)

    const svgRef = useRef();

    const createGraph = async () => {

        let parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S");
        data.forEach((d) => {
            d.date = parseTime(d.datetime);
            d.value = parseInt(d.value);
            d.label = parseInt(d.label);
        });        

        // set the dimensions and margins of the graph
        var margin = { top: 10, right: 30, bottom: 30, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
        
        // append the svg object to the body of the page
        var svg = d3.select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Add X axis and Y axis
        var x = d3.scaleTime().range([0, width]);
        var y0 = d3.scaleLinear().range([height, 0]);
        var y1 = d3.scaleLinear().range([height, 0]);

        x.domain(d3.extent(data, (d) => { return d.date; }));
        y0.domain([0, d3.max(data, (d) => { return d.value; })]);
        y1.domain([0, d3.max(data, (d) => { return d.label; })]);

        svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
        
        // Add the Y0 Axis
        svg.append("g")
        .attr("class", "axisSteelBlue")
        .call(d3.axisLeft(y0));

        // Add the Y1 Axis
        svg.append("g")
        .attr("class", "axisRed")
        //This line transport the position of the secondary y axis
        .attr("transform", "translate( " + width + ", 0 )")
        .call(d3.axisRight(y1));
        

        // add the Line
        var valueLine = d3.line()
        .x((d) => { return x(d.date); })
        .y((d) => { return y0(d.value); });

        // add the Line 2
        var valueLine2 = d3.line()
        .x((d) => { return x(d.date); })
        .y((d) => { return y1(d.label); });

        svg.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 0.5)
        .attr("d", valueLine(data))

        svg.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 0.5)
        .attr("d", valueLine2(data))
    }

    useEffect(() => {
        createGraph();
    }, []);
    return (
    <div>
        <span><b>F{props.feature_id}:</b> {props.title}</span>
        <svg ref={svgRef} style={{ margin: "0px", display: "block" }}></svg>
    </div>
    );
};