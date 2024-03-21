import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ig from "../assets/ig_logo.png"
import pic from "../assets/Imvest_logo.png"

import './Drawer.css'
export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [path,setpath] = React.useState('')
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <img src={pic} style={{width:'168px',height:'43px',marginLeft:'20px',marginTop:'40px',
    marginBottom:'40px'}}></img>
      {['About us', 'Consulting', 'Academy', 'Innovation', 'Contact'].map((text, index) => {
  let path = '';
  if (index === 1) {
    path = 'Consulting_service';
  } else if (index === 2) {
    path = 'Consulting_article';
  } else if (index === 3) {
    path = 'Innovation';
  } else if (index === 4) {
    path = 'Contact';
  }

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton style={{marginBottom: "54px"}}>
        <ListItemText primary={<a href={path} style={{ 
    marginLeft:'15px',
    color: "#929292",
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "43px",
    
}}>{text}</a>} />

      </ListItemButton>

    </ListItem>
    
  );
})}
            <div className="button_signin">Sign in</div>

      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}>{ <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19" fill="none">
<path d="M0.625 18.75H28.375V15.6667H0.625V18.75ZM0.625 11.0417H28.375V7.95833H0.625V11.0417ZM0.625 0.25V3.33333H28.375V0.25H0.625Z" fill="black"/>
</svg>}</Button>
          <Drawer
            anchor={'right'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}