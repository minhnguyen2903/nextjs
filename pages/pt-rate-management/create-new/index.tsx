import {
  Autocomplete, Box, Button, Divider, FormControl, FormControlLabel, Grid, InputLabel, OutlinedInput, Stack, TextField, Typography
} from "@mui/material";
import { Formik } from "formik";
import moment from "moment";

const CreateForm = () => {
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
                border: "solid 1px",
                borderRadius: "8px",
              }}
            >
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2} xs={12}>
                  <InputLabel htmlFor="account-email">
                    アーティスト名
                  </InputLabel>
                </Grid>
                <Grid item sm={10} xs={12}>
                  <Autocomplete
                    options={[]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="account-email"
                        label="アーティスト名を選択"
                        placeholder="アーティスト名を選択"
                        size="small"
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2} xs={12}>
                  <InputLabel htmlFor="pt-rate">pt率</InputLabel>
                </Grid>
                <Grid item sm={10} xs={12}>
                  <FormControlLabel
                    sx={{ marginLeft: "0" }}
                    label="%"
                    control={
                      <OutlinedInput
                        type="number"
                        id="pt-rate"
                        sx={{ width: "56px", marginRight: "8px" }}
                        size="small"
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2} xs={12}>
                  <InputLabel htmlFor="pt-start-date">開始日時</InputLabel>
                </Grid>
                <Grid item sm={10} xs={12}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    <FormControl fullWidth>
                      <OutlinedInput
                        type="date"
                        id="pt-start-date"
                        size="small"
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Autocomplete
                        options={[]}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="-" size="small" />
                        )}
                      />
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2} xs={12}>
                  <InputLabel htmlFor="pt-end-date">終了日時</InputLabel>
                </Grid>
                <Grid item sm={10} xs={12}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    <FormControl fullWidth>
                      <OutlinedInput
                        type="date"
                        id="pt-end-date"
                        size="small"
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Autocomplete
                        options={[]}
                        renderInput={(params) => (
                          <TextField {...params} size="small" />
                        )}
                      />
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
              <Divider />
              <Grid container alignItems="center" sx={{ my: "40px" }}>
                <Grid item sm={2} xs={12}>
                  <InputLabel>登録日時</InputLabel>
                </Grid>
                <Grid item sm={10} xs={12}>
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
                <Grid item sm={2} xs={12}>
                  <InputLabel>更新日時</InputLabel>
                </Grid>
                <Grid item sm={10} xs={12}>
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
              <Button variant="outlined" sx={{ width: "120px" }}>
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
