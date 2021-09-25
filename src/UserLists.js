import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function UserList({ users }) {
  return (
    <List sx={{ width: "100%", maxWidth: 600 }}>
      {users.map((user) => {
        return (
          <Box
            sx={{
              m: 2,
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.first_name} src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={user.first_name + " " + user.last_name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.email}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        );
      })}
    </List>
  );
}
