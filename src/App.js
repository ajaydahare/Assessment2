import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import axios from "axios";
import UserList from "./UserLists";
import "./App.css";
import Paginate from "./Paginate";
import { Box } from "@mui/system";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const [dataObject, setDataObject] = useState({});
  const [loading, setLoading] = useState(true);
  const query = useQuery();
  const currentPage = query.get("page") || 1;

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((res) => {
        setDataObject(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  return (
    <div className="app">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="app_container">
          <h3 style={{ textAlign: "center" }}>Users List</h3>
          <UserList users={dataObject.data} />
          <Box sx={{ m: 2 }}>
            <Paginate total_pages={dataObject.total_pages} page={currentPage} />
          </Box>
        </div>
      )}
    </div>
  );
}

export default App;
