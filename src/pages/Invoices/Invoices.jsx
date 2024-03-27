import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default Invoices;
