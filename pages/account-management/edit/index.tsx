import {
  Box,
  FormControl,
  OutlinedInput,
  InputLabel,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import moment from "moment";
import { useRouter } from "next/router";

const CreateForm = () => {
  const route = useRouter();
  const handleCancel = () => {
    route.back();
  };
  return (
    <Box sx={{ padding: "40px" }}>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <form noValidate onSubmit={props.handleSubmit}>
            <Box
              sx={{
                padding: "0 40px",
                border: "solid 1px grey",
                borderRadius: "8px",
              }}
            >
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2}>
                  <InputLabel htmlFor="account-email">
                    メールアドレス
                  </InputLabel>
                </Grid>
                <Grid item sm={10}>
                  <FormControl fullWidth>
                    <InputLabel size="small">メールアドレスを入力</InputLabel>
                    <OutlinedInput
                      id="account-email"
                      label="メールアドレスを入力"
                      placeholder="メールアドレスを入力"
                      size="small"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2}>
                  <InputLabel htmlFor="account-password">パスワード</InputLabel>
                </Grid>
                <Grid item sm={10}>
                  <FormControl fullWidth>
                    <InputLabel size="small">パスワードを入力</InputLabel>
                    <OutlinedInput
                      id="account-password"
                      label="パスワードを入力"
                      size="small"
                      placeholder="パスワードを入力"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2}>
                  <InputLabel>ステータス</InputLabel>
                </Grid>
                <Grid item sm={10}>
                  <FormControlLabel label="有効" control={<Checkbox />} />
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2}>
                  <InputLabel>登録日時</InputLabel>
                </Grid>
                <Grid item sm={10}>
                  <Typography component="span">
                    {moment().format("YYYY/MM/DD")}
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography component="span" sx={{ color: "#A6AFC8" }}>
                    {moment().format("HH:MM")}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2}>
                  <InputLabel>更新日時</InputLabel>
                </Grid>
                <Grid item sm={10}>
                  <Typography component="span">
                    {moment(new Date()).format("YYYY/MM/DD")}
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography component="span" sx={{ color: "#A6AFC8" }}>
                    {moment(new Date()).format("HH:MM")}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={4}
              sx={{ mt: 3 }}
            >
              <Button
                variant="outlined"
                sx={{ width: "120px" }}
                onClick={handleCancel}
              >
                キャンセル
              </Button>
              <Button variant="contained" sx={{ width: "120px" }}>
                保存
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateForm;
