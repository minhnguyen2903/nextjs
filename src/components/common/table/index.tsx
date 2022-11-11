import { TableProps } from "@mui/material";

export interface TablePaginationProps {
  page: number;
  limit: number;
  total: number;
  onPageChange?: (page: number) => void;
}

export type TTableProps<TItem> = TableProps & {
  items: TItem[];
  loading?: boolean;
  showIndex?: boolean;
  enableEdit?: boolean;
  sx?: TableProps["sx"];
  enableDelete?: boolean;
  MUITableProps?: TableProps;
  layout: TTableLayout<TItem>[];
  tablePagination?: TablePaginationProps;
  handleEditAction?: (item: TItem) => void;
  handleCellClick?: (cellValue: any) => void;
  handleDeleteAction?: (item: TItem) => void;
  handleRowClick?: (rowValue: TItem) => void;
};

export interface TTableLayout<TItem> {
  label: string;
  key: keyof TItem;
  sx?: TableProps["sx"];
  onClick?: (record: TItem, ...params: any) => void;
  formatValue?: (value: string, item: TItem) => string | React.ReactNode | null;
}
