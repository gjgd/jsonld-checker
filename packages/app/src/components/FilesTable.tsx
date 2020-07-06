import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';
import { check, getAllJsonLdFromString } from 'jsonld-checker';
import LoaderButton from './LoaderButton';

interface Data {
  path: string;
  url: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((el: any, index: number) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  align: TableCellProps['align'];
}

const headCells: HeadCell[] = [
  {
    id: 'path',
    align: 'left',
    disablePadding: true,
    label: 'Path',
  },
  {
    id: 'url',
    align: 'left',
    disablePadding: true,
    label: 'Raw URL',
  },
  {
    id: 'ok',
    align: 'left',
    disablePadding: true,
    label: 'valid',
  },
];

interface EnhancedTableProps {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: string) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  })
);

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {`${numSelected} selected`}
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Files found from Github repository
        </Typography>
      )}
      {numSelected > 0 ? (
        <></>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

const EnhancedTable: React.FunctionComponent<{ files: Array<Data> }> = ({
  files,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('path');
  const [selected, setSelected] = React.useState(() => {
    const initialSelected = new Map();
    files.forEach((file) => {
      initialSelected.set(file.path, false);
    });
    return initialSelected;
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected = new Map(selected);
    files.forEach((file) => {
      newSelected.set(file.path, event.target.checked);
    });
    setSelected(newSelected);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const currentValue = selected.get(name);
    const newSelected = new Map(selected);
    newSelected.set(name, !currentValue);
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.get(name);

  const countSelected = () => {
    const arraySelected = Array.from(selected);
    const count = arraySelected.filter((file) => file[1]).length;
    return count;
  };

  const fileTypes = ['*.js', '*.ts', '*.json', '*.html'];

  const [state, setState] = React.useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const extension = name.split('.').pop();
    const newSelected = new Map(selected);
    files
      .filter((file) => {
        const fileMatchesExtension = file.path.split('.').pop() === extension;
        return fileMatchesExtension;
      })
      .forEach((file) => {
        newSelected.set(file.path, checked);
      });
    setSelected(newSelected);
    setState({ ...state, [name]: checked });
  };

  const toRawGithubUrl = (path: string) =>
    `https://raw.githubusercontent.com/gjgd/jsonld-checker/master/${path}`;

  const onCheck = async () => {
    const filesToCheck = files.filter((file) => selected.get(file.path));
    for (const file of filesToCheck) {
      const rawUrl = toRawGithubUrl(file.path);
      const res = await fetch(rawUrl);
      const text = await res.text();
      const jsonldObjects: Array<any> = await getAllJsonLdFromString(text);
      let ok = true;
      for (let i = 0; i < jsonldObjects.length; i += 1) {
        const object = jsonldObjects[i];
        const result = await check(object);
        ok = ok && result.ok;
      }
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormGroup row>
          {fileTypes.map((fileType) => {
            return (
              <FormControlLabel
                key={fileType}
                control={
                  <Checkbox
                    checked={state[fileType]}
                    onChange={handleChange}
                    name={fileType}
                    color="primary"
                  />
                }
                label={fileType}
              />
            );
          })}
        </FormGroup>
        <LoaderButton onClick={onCheck} buttonText="Check" />
        <EnhancedTableToolbar numSelected={countSelected()} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={countSelected()}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={files.length}
            />
            <TableBody>
              {stableSort(files, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => {
                  const isItemSelected = isSelected(row.path);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const rawUrl = `${toRawGithubUrl(row.path)}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.path)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.path}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.path}
                      </TableCell>
                      <TableCell>
                        <a href={rawUrl}>{rawUrl}</a>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={files.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default EnhancedTable;
