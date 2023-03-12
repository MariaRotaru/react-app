import React from 'react';
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

function CarsList() {

  const cars = [
    {
      _id: 1,
      name: "Ferrari",
      bhp: 1234,
      avatar_url:
        "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVycmFyaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      _id: 2,
      name: "Bugatti",
      bhp: 6784,
      avatar_url:
        "https://www.kamps-gruppe.de/wp-content/uploads/2021/03/bugatti-veyron-weiss.jpg"
    },
  ];
  return (
    <>
    <Typography variant="h3" component="h2">
 Cars
</Typography>
        <List>
          {cars.map(({ name, bhp, avatar_url, _id}, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar alt="" src={avatar_url} />
              </ListItemAvatar>
            <ListItemText>
              {name} (BHP: {bhp})
            </ListItemText>
              <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
              >
              <EditIcon/>
              </IconButton>
              <IconButton aria-label="delete" onClick={() => console.log('Delete ${_id}')}>
              <DeleteIcon/>
              </IconButton>
            </ListItem>
          ))}
        </List>
    </>
  )
}

export default CarsList