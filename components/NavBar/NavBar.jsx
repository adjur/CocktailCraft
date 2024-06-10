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
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import SearchIcon from '@mui/icons-material/Search';

const pages = [
  { name: 'Mix Your Own', link: '#BuildBy' },
  { name: 'Explore', link: '#Cod' },
  { name: 'Favorites', link: '#CardSlider' },
  { name: 'Packages', link: '#Packages' },
  { name: 'Contact', link: '#Footer' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalBarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            Cocktail Craft
          </Typography>

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
                <MenuItem key={page.name} onClick={(e) => handleSmoothScroll(e, page.link)}>
                  <Typography textAlign="center">
                    <a href={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page.name}
                    </a>
                  </Typography>
                </MenuItem>

              ))}
            </Menu>
          </Box>
          <LocalBarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={(e) => handleSmoothScroll(e, page.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </a>
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'block' } }}>
            <TextField
              variant="outlined"
              placeholder="Search for cocktails..."
              size="small"
              sx={{
                bgcolor: 'rgba(43, 45, 46, 0.5)',
                color: '#ffffff',
                '& input': {
                  color: '#ffffff',
                },
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderStyle: 'no border'
                  },
                  '&:hover fieldset': {
                    borderStyle: 'no border',
                    color: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderStyle: 'no border',
                    borderColor: 'rgba(43, 45, 46, 0.5)',
                    borderWidth: '1px',
                    backgroundColor: 'rgba(43, 45, 46,)',
                  },
                  '&.Mui-focused': {
                    '& fieldset': {
                      borderColor: 'rgba(43, 45, 46, 0.5)',
                      borderWidth: '2px',
                      backgroundColor: 'rgba(43, 45, 46,)',
                      color: '#ffffff',
                    }
                  }
                }
              }}
            />
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
