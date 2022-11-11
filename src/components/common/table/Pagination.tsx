import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { TablePaginationProps } from ".";

const Pagination = ({
  page,
  limit,
  total,
  onPageChange,
}: TablePaginationProps) => {
  const currentPage = useRef(page || 1);
  const pageCount = useRef(Math.ceil(total / limit) || 1);
  const [trigger, setTrigger] = useState(false);
  const nextPage = () => {
    if (currentPage.current < pageCount.current) {
      currentPage.current += 1;
      setTrigger((prev) => !prev);
    }
    onPageChange && onPageChange(currentPage.current);
  };

  const prevPage = () => {
    if (currentPage.current > 1) {
      currentPage.current -= 1;
      setTrigger((prev) => !prev);
    }
    onPageChange && onPageChange(currentPage.current);
  };

  const selectPage = (page: number) => {
    currentPage.current = page;
    setTrigger((prev) => !prev);
    onPageChange && onPageChange(currentPage.current);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <Box>
        {(currentPage.current - 1) * limit + 1}〜{currentPage.current * limit}人
        /{" "}
        <Typography component="span" sx={{ color: "#A6AFC8" }}>
          合計
        </Typography>{" "}
        {total}人
      </Box>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="row" alignItems="center">
          <Autocomplete
            value={currentPage.current}
            blurOnSelect
            getOptionLabel={(option) => option.toString()}
            onChange={(e, value) => selectPage(value)}
            options={Array(pageCount.current || 1 - 1)
              .fill(null)
              .map((element, index) => index + 1)}
            renderInput={(params) => (
              <TextField {...params} size="small" sx={{ userSelect: "none" }} />
            )}
            disableClearable
          />
          &nbsp;/&nbsp;{pageCount.current}
        </Stack>
        <Stack spacing={1} direction="row">
          <Button
            color="inherit"
            startIcon={<KeyboardArrowLeftIcon />}
            onClick={prevPage}
          >
            前へ
          </Button>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={nextPage}
          >
            次へ
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Pagination;
