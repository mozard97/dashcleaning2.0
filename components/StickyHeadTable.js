import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { JOB_STATUS } from "../utils/users";
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "mobile",
    label: "Mobile",
    minWidth: 170,
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 170,
    align: "right",
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function StickyHeadTable({
  loading,
  employees,
  assignJob,
  detail,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Paper style={{overflow:"scroll"}}>
      <TableContainer sx={{ height: "50vh",width:"100%",overflow:"scroll" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: 15 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      console.log("column", column);
                      console.log("row", row);

                      const value = row[column.id];
                      if (column.id !== "Action")
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ fontSize: 15 }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      else
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button
                              onClick={() => {
                                if (
                                  detail.status !== JOB_STATUS.ASSIGNED &&
                                  detail.status !== JOB_STATUS.CLAIMED &&
                                  detail?.employeeEmail !== row?.email
                                )
                                  assignJob(JOB_STATUS.ASSIGNED, index);
                              }}
                              style={{ fontSize: 15 }}
                              disabled={loading}
                              variant="text"
                            >
                              {detail?.employeeEmail &&
                              detail?.employeeEmail === row?.email
                                ? detail?.status
                                : detail?.employeeEmail
                                ? detail?.status === JOB_STATUS.DECLINED
                                  ? "Assign"
                                  : ""
                                : "Assign"}
                            </Button>
                          </TableCell>
                        );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
