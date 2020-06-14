import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Done from '@material-ui/icons/Done';
import Error from '@material-ui/icons/Error';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty';
import JsonEditor from './JsonEditor';
import CheckStatus from '../models/CheckStatus';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  let Icon;
  switch (row.status) {
    case CheckStatus.PASSED:
      Icon = <Done style={{ color: 'green' }} />;
      break;
    case CheckStatus.FAILED:
      Icon = <Error style={{ color: 'red' }} />;
      break;
    case CheckStatus.PENDING:
    default:
      Icon = <HourglassEmpty style={{ color: 'orange' }} />;
  }

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{Icon}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <JsonEditor
                value={JSON.stringify(row.object, null, 2)}
                index={row.key}
                readOnly
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const ResultTable: React.FunctionComponent<{ results: Array<Object> }> = ({
  results,
}) => {
  const rows = results.map(({ object, status }: any, index: number) => ({
    key: index,
    name: object.id ? object.id : `object ${index}`,
    status,
    object,
  }));
  if (rows.length === 0) {
    return <></>;
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>JSON-LD objects detected</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.key} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
