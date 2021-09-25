import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./PaginateStyle";

function Paginate({ total_pages, page }) {
  const classes = useStyles();
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={total_pages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <div>
          <PaginationItem
            {...item}
            component={Link}
            to={`/users?page=${item.page}`}
          />
        </div>
      )}
    />
  );
}

export default Paginate;
