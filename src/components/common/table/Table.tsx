import {
  Box,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { makeStyles } from "@mui/styles";
import { useMemo } from "react";
import { TTableProps } from ".";
import Pagination from "./Pagination";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: "1em",
  },
  table: {
    position: "relative",
    "& tr": {
      padding: "0px 1em",
    },
    "& th, & td": {
      height: "60px",
      paddingTop: "8px",
      paddingBottom: "8px",
      userSelect: "none",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  th: {
    background: "#F2F3FB",
    fontWeight: "bold !important",
    textTransform: "capitalize",
  },
  tBody: {
    "& > tr:hover": {
      background: theme.palette.action.hover,
      cursor: "pointer",
    },
  },
  colIndex: {
    width: "60px",
    minWidth: "60px",
    maxWidth: "60px",
  },
  pagination: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "1em",
  },
  progress: {
    "&.MuiLinearProgress-root": {
      position: "absolute",
      width: "100%",
      height: "2px",
    },
  },
  tableContainer: {
    "&::-webkit-scrollbar": {
      width: "0px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.3)",
    },
  },
}));

const MyBaseTable = <TItem,>({
  enableDelete,
  enableEdit,
  handleCellClick,
  handleDeleteAction,
  handleEditAction,
  handleRowClick,
  items,
  layout,
  loading,
  MUITableProps,
  showIndex = false,
  sx,
  tablePagination,
}: TTableProps<TItem>) => {
  const classes = useStyles({
    handleRowClick,
  });

  const renderTableHead = useMemo(
    () => (
      <TableRow sx={{ background: "#E6E6E6" }}>
        {showIndex && <TableCell className={classes.th}>No</TableCell>}
        {layout.map((element) => (
          <TableCell className={classes.th} key={element.label} sx={element.sx}>
            {element.label}
          </TableCell>
        ))}
        {enableEdit && <TableCell className={classes.th} />}
        {enableDelete && <TableCell className={classes.th} />}
      </TableRow>
    ),
    [classes.th, enableDelete, enableEdit, layout, showIndex]
  );

  const onCellClick = (cellValue: any) => {
    handleCellClick && !loading && handleCellClick(cellValue);
  };

  return (
    <Box sx={{ height: "100%", minHeight: "300px" }}>
      <Box sx={{ height: "100%" }}>
        <Box className={classes.pagination} sx={{ px: "0.5em", py: "1em" }}>
          {tablePagination && <Pagination {...tablePagination} />}
        </Box>
        <TableContainer
          className={classes.tableContainer}
          sx={{
            ...sx,
            height: "calc(100% - 120px)",
            maxHeight: "calc(100% - 120px)",
            overflow: "auto",
            borderRadius: "8px",
            border: "solid 1px #E0E6EA",
          }}
        >
          <Table {...MUITableProps} className={classes.table}>
            <TableHead>{renderTableHead}</TableHead>
            <TableBody className={classes.tBody}>
              {items.map((item: TItem, index: number) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick && handleRowClick(item)}
                >
                  {showIndex && (
                    <TableCell className={classes.colIndex}>
                      {loading ? <Skeleton /> : index}
                    </TableCell>
                  )}
                  {layout.map((col) => (
                    <TableCell
                      key={col.label}
                      sx={col.sx}
                      onClick={() => onCellClick(item[col.key])}
                    >
                      <>
                        {loading ? (
                          <Skeleton />
                        ) : col.formatValue ? (
                          col.formatValue(item[col.key] as string, item)
                        ) : (
                          (item[col.key] as string)
                        )}
                      </>
                    </TableCell>
                  ))}
                  {enableEdit && (
                    <TableCell
                      className={classes.colIndex}
                      sx={{ width: "60px", minWidth: "60px", maxWidth: "60px" }}
                    >
                      {loading ? (
                        <Skeleton />
                      ) : (
                        <IconButton
                          color="inherit"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditAction && handleEditAction(item);
                          }}
                        >
                          <CreateOutlinedIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  )}
                  {enableDelete && (
                    <TableCell
                      className={classes.colIndex}
                      sx={{ width: "60px", minWidth: "60px", maxWidth: "60px" }}
                    >
                      {loading ? (
                        <Skeleton />
                      ) : (
                        <IconButton
                          color="inherit"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteAction && handleDeleteAction(item);
                          }}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
              {loading && (
                <TableRow>
                  {layout.map((col) => (
                    <TableCell key={col.label} sx={col.sx}>
                      <Skeleton />
                    </TableCell>
                  ))}
                </TableRow>
              )}
            </TableBody>
          </Table>
          {!items.length && !loading && (
            <Typography sx={{ textAlign: "center", p: "1em" }}>
              No rows to show
            </Typography>
          )}
        </TableContainer>
        <Box className={classes.pagination} sx={{ py: "1em" }}>
          {tablePagination && <Pagination {...tablePagination} />}
        </Box>
      </Box>
    </Box>
  );
};

export default MyBaseTable;
