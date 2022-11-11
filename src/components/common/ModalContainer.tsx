import { Box } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: Props) => {
  return <Box sx={{ padding: "32px 16px 16px" }}>{children}</Box>;
};

export default ModalContainer;
