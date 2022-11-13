
import './App.css';
import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



const pages = ['Start Bootstrap','Home', 'About', 'Shop'];


function App() {

  const [add,setAdd]=useState(0)
  const [disable1,setDisable1]=useState(false)
  const [disable2,setDisable2]=useState(false)
  const [disable3,setDisable3]=useState(false)
  const [disable4,setDisable4]=useState(false)
  const [disable5,setDisable5]=useState(false)
  const [disable6,setDisable6]=useState(false)

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 



  return (
    <div className="App">
 <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
   
          < ShoppingCartTwoToneIcon />
          <Button variant="contained"  onClick={()=> {return setAdd(0)|| setDisable1(false) || setDisable2(false)  || setDisable3(false)  || setDisable4(false)  || setDisable5(false)  || setDisable6(false)}}>Cart {add}</Button>
      
        </Toolbar>
      </Container>
    </AppBar>


    <div className='style'>
    <div className='run'>
      <h1> shop in style </h1>  
      
    <h3>with this shop homepage template</h3>
      </div>
    </div>





<div className='cards'>
<div className='card1'>
    <Card sx={{ maxWidth:250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt=" Fancy Product"
      />
      <div className='name'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography sx={{fontSize:20}} color="text.secondary">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      </div>
      <div className='share'>
      <CardActions >
      <Button variant="outlined" disabled={disable1} onClick={()=>{
          return setAdd(add + 1) || setDisable1(true) }}>Cart</Button>
      </CardActions>
      </div>
    </Card>
    </div>





    <div className='card1'>
    <Card sx={{ maxWidth:250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="green iguana"
      />
      <div className='name'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Special Item
        </Typography>
        
        <Typography sx={{fontSize:20}} color="text.secondary">
        <strike >$20.00</strike>  $18.00
        </Typography>
      </CardContent>
      </div>
      <div className='share'>
      <CardActions >
      <Button variant="outlined" disabled={disable2} onClick={()=>{
          return setAdd(add + 1) || setDisable2(true) }}>Cart</Button>
      </CardActions>
      </div>
    </Card>
    </div>




    <div className='card1'>
    <Card sx={{ maxWidth:250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="green iguana"
      />
      <div className='name'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sale Item
        </Typography>
        <Typography sx={{fontSize:20}} color="text.secondary">
        <strike >$50.00</strike>  $25.00
        </Typography>
      </CardContent>
      </div>
      <div className='share'>
      <CardActions >
      <Button variant="outlined" disabled={disable3} onClick={()=>{
          return setAdd(add + 1) || setDisable3(true) }}>Cart</Button>
      </CardActions>
      </div>
    </Card>
    </div>




    <div className='card1'>
    <Card sx={{ maxWidth:250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="green iguana"
      />
      <div className='name'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Popular Item
        </Typography>
        <Typography sx={{fontSize:20}} color="text.secondary">
        $40.00 
        </Typography>
      </CardContent>
      </div>
      <div className='share'>
      <CardActions >
      <Button variant="outlined" disabled={disable4} onClick={()=>{
          return setAdd(add + 1) || setDisable4(true) }}>Cart</Button>
      </CardActions>
      </div>
    </Card>
    </div>






    <div className='card1'>
    <Card sx={{ maxWidth:250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="green iguana"
      />
      <div className='name'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sale Item
        </Typography>
        <Typography sx={{fontSize:20}} color="text.secondary">
        <strike >$50.00</strike>  $25.00
        </Typography>
      </CardContent>
      </div>
      <div className='share'>
      <CardActions >
      <Button variant="outlined" disabled={disable5} onClick={()=>{
          return setAdd(add + 1) || setDisable5(true) }}>Cart</Button>
      </CardActions>
      </div>
    </Card>
    </div>




    <div className='card1'>
    <Card sx={{ maxWidth:250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="green iguana"
      />
      <div className='name'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography sx={{fontSize:20}} color="text.secondary">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      </div>
      <div className='share'>
      <CardActions >
      <Button variant="outlined" disabled={disable6} onClick={()=>{
          return setAdd(add + 1) || setDisable6(true) }}>Cart</Button>
      </CardActions>
      </div>
    </Card>
    </div>
    </div>





    </div>

);  
}

export default App;
