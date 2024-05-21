"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataGrids from "../../components/data-grid/DataGrid";
import { columns } from "../../components/table/Column";
import PageHeader from "../../components/layout/Header";

const ClientSideDataGrid = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(25); ///default set 25
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the server
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/anime`,
      );
      setRows(response.data.data);
      // setRowCount(response.data.pagination.last_visible_page);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  // Fetch data whenever page or pageSize changes
  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  // Handle pagination changes
  const paginationHandler = (params) => {
    setPage(params.page);
    setPageSize(params.pageSize);
  };

  return (
    <div className="serverTable mt-32">
      <PageHeader title=" MUI Data Grid Client Side" />

        <DataGrids
          rows={rows}
          columns={columns}
          rowCount={rowCount}
          page={page}
          paginationHandler={paginationHandler}
          loading={loading}
          paginationMode="client"
        />
    </div>
  );
};

export default ClientSideDataGrid;
