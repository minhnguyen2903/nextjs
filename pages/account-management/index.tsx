import {
  Box,
  Paper,
  TextField,
  Divider,
  Stack,
  Button,
  InputAdornment,
  Fade,
  Grow,
  Modal,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Chip,
} from "@mui/material";
import MyBaseTable from "../../src/components/common/table/Table";
import React, { useCallback, useRef, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";
import { TTableLayout } from "components/common/table";
import ModalContainer from "components/common/ModalContainer";
import moment from "moment";

const fade = true;

const UserTable = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [data, setData] = useState([
    {
      createdAt: "2022-10-25T07:41:02.327Z",
      name: "Dr. Bernadette Daniel",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
      birth: "2022-06-18T09:27:47.703Z",
      email: "Tomas.Wilderman@gmail.com",
      active: false,
      phone: "673-919-7158",
      country: "Cambridgeshire",
      bankBalance: 24555.73,
      timezone: "Pacific/Midway",
      id: "1",
    },
    {
      createdAt: "2022-10-25T07:41:02.327Z",
      name: "Dr. Bernadette Daniel",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
      birth: "2022-06-18T09:27:47.703Z",
      email: "Tomas.Wilderman@gmail.com",
      active: true,
      phone: "673-919-7158",
      country: "Cambridgeshire",
      bankBalance: 24555.73,
      timezone: "Pacific/Midway",
      id: "2",
    },
  ]);

  const tableLayout: TTableLayout<any>[] = [
    {
      key: "name",
      label: "Name",
      sx: { width: "40vw", minWidth: "300px", maxWidth: "40vw" },
    },
    {
      key: "active",
      label: "Status",
      formatValue: (value) => (
        <Chip
          label={value ? "有効" : "無効"}
          color={value ? "success" : "default"}
          size="small"
          sx={{
            padding: "4px 19px",
            lineHeight: "1em",
          }}
        />
      ),
    },
    {
      key: "birth",
      label: "Birth",
      sx: { minWidth: "250px" },
      formatValue: (value) => (
        <>
          <Typography component="span">{moment(value).format("YYYY/MM/DD")}</Typography>
          &nbsp;&nbsp;
          <Typography component="span">{moment(value).format("HH/mm")}</Typography>
        </>
      ),
    },
    {
      key: "createdAt",
      label: "Created At",
      sx: { minWidth: "250px" },
      formatValue: (value) => (
        <>
          <Typography component="span">
            {moment(value).format("YYYY/MM/DD")}
          </Typography>
          &nbsp;&nbsp;
          <Typography component="span">
            {moment(value).format("HH/mm")}
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: "100vh", padding: "30px" }}>
      <Stack sx={{ height: "88px", justifyContent: "space-between" }}>
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <TextField
            size="small"
            placeholder="アーティスト名を入力"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            startIcon={<AddOutlinedIcon />}
            onClick={() => router.push("/manager")}
          >
            アーティストを追加
          </Button>
        </Stack>
        <Divider />
      </Stack>
      <Grow in={fade} unmountOnExit>
        <Box sx={{ height: "calc(100% - 88px)" }}>
          <MyBaseTable
            items={data || []}
            layout={tableLayout}
            handleRowClick={(row) => {
              console.log(row);
            }}
            enableEdit
            enableDelete
            handleEditAction={(item) => console.log("item:", item)}
            handleDeleteAction={handleOpenDialog}
            MUITableProps={{
              stickyHeader: true,
            }}
            tablePagination={{
              total: 3000,
              onPageChange: (page) => {
                console.log("current page:", page);
              },
              page: 2,
              limit: 20,
            }}
          />
        </Box>
      </Grow>
      <Dialog
        open={openDialog}
        sx={{ "&.MuiPaper-root": { borderRadius: "8px" } }}
      >
        <ModalContainer>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              選択したアーティストを削除しますか？
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", gap: "16px" }}>
            <Button
              onClick={handleCloseDialog}
              sx={{ width: "144px" }}
              variant="outlined"
            >
              キャンセル
            </Button>
            <Button
              color="error"
              onClick={handleCloseDialog}
              sx={{ width: "144px" }}
              variant="contained"
            >
              削除
            </Button>
          </DialogActions>
        </ModalContainer>
      </Dialog>
    </Box>
  );
};

export default React.memo(UserTable);
