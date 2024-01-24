// import stylesAdmin from  '../../styles/admin.module.css'
// import { Checkbox, FormControlLabel } from '@mui/material';

import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import ws_api from '../../lib/axios';
import { useRecordContext } from 'ra-core';
import { Loading } from 'react-admin';

// interface Data {
//   DATETIME: number;
//   carbs: number;
//   dessert: string;
//   fat: number;
//   id: number;
//   protein: number;
// }

interface ColumnData {
  // dataKey: keyof Data;
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

let columns: ColumnData[] = [
  {
    width: 40,
    label: 'Datetime',
    dataKey: 'DATETIME',
    numeric: false,
  },
];
for (let i=1; i<=10; i++) {
  columns.push({
    width: 10,
    label: `F${i}`,
    dataKey: `F${i}`,
    numeric: true,})
}
columns.push({
  width: 10,
  label: `Label`,
  dataKey: `LABEL`,
  numeric: true})

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function DatasetTable() {

  const [datasetRows, setDatasetRows] = useState([]);

  const task = useRecordContext();
  if (!task) return null;
  
  async function getRowsRemotely() {
    ws_api.get(`/dataset/${task.id}`,{
    })
    .then(response => {
      // console.log(response.data)
      setDatasetRows(response.data)
      return response
    })
    .catch(console.error)
  }

  useEffect(() => {

    getRowsRemotely()

    return () => {

    };

  }, []);

  // console.log(datasetRows)

  if (datasetRows.length>0) {

    return (
      <Paper style={{ height: 600, width: '100%' }}>
        <TableVirtuoso
          data={datasetRows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    );

  } else return (
    <div className="loading-charts">
      <Loading loadingPrimary='Loading Dataset...' loadingSecondary='Please wait...'/>
    </div>
  );

  
}