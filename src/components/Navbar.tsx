"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import { Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PopCategories from "./PopCategories";

const pages = ["Home", "Categories", "Authors"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const localData =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <AppBar
      sx={{
        width: "100%",
        position: "sticky",
        top: "0px",
        backgroundImage: 'url("/images/bgNavBar.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "1000",
      }}
      position="static"
      className="bg-white"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <img src="/images/logo.png" alt="logo" width="50" height={"50"} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              className="text-red-200 text-2xl"
              href="#app-bar-with-responsive-menu"
              sx={{
                color: "#CC9600",
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 900,
                textDecoration: "none",
                py: "10",
              }}
            >
              Book Bazaar
            </Typography>
          </Stack>

          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
              color: "#CC9600",
            }}
          >
            Book Bazaar
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                 if(page == "Categories"){
                  return  <PopCategories key={page} />
                  }else {
                  return  <Link key={page} href={`/${page}`}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{ textAlign: "center", textTransform: "capitalize" }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                  } ;
              })}

              {localData ? (
                <div className="">
                  <div className="flex justify-center items-center  gap-4 ">
                    <Link href={"/Cart"}>
                      <AddShoppingCartIcon sx={{ cursor: "pointer" }} />
                    </Link>
                    <Link href={"/favorites"}>
                      <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                    </Link>
                  </div>
                  <Link className="mx-2 my-4 rounded-md" href={"/signin"}>
                    <Button
                      className="bg-white  text-textColor hover:bg-textColor hover:text-white"
                      sx={{ border: "1px solid black", color: "black" }}
                      endIcon={<ExitToAppIcon />}
                      onClick={() => {
                        localStorage.removeItem("token");
                      }}
                    >
                      Log Out
                    </Button>
                  </Link>
                </div>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px",
                    gap: "4px",
                  }}
                >
                  <Button
                    className="bg-white text-textColor hover:bg-textColor hover:text-white"
                    sx={{ border: "1px solid black", color: "black" }}
                    endIcon={<PersonIcon />}
                  >
                    <Link href={"/signup"}> Sign Up</Link>
                  </Button>
                  <Button
                    className="bg-white text-textColor hover:bg-textColor hover:text-white"
                    sx={{ border: "1px solid black ", color: "black" }}
                    endIcon={<LoginIcon />}
                  >
                    <Link href={"/signin"}> Log in</Link>
                  </Button>
                </Box>
              )}
            </Menu>
          </Box>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            justifyItems={"center"}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
           {pages.map((page) => {
                 if(page == "Categories"){
                  return  <PopCategories key={page}/>
                  }else {
                  return  <Link key={page} href={`/${page}`}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{ textAlign: "center", textTransform: "capitalize" }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                  } ;
              })}
          </Stack>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              gap: {
                xs: "5px",
                sm: "10px",
              },
              alignItems: "center",
            }}
          >
            {localData ? (
              <div className="flex items-baseline  gap-4  absolute top-4  right-8">
                <Link href={"/Cart"}>
                  <AddShoppingCartIcon sx={{ cursor: "pointer" }} />
                </Link>
                <Link href={"/favorites"}>
                  <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                </Link>
                <Link className="mx-2 hover:bg-white border rounded-md border-solid text-white  hover:text-textColor bg-textColor " href={"/signin"}>
                  <Button
                    sx={{color:"white", ":hover":{color:"black"}}}
                    endIcon={<ExitToAppIcon />}
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                  >
                    Log Out
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Button
                  className="bg-white text-textColor hover:bg-textColor hover:text-white"
                  sx={{ border: "1px solid white", color: "white" }}
                  endIcon={<PersonIcon />}
                >
                  <Link href={"/signup"}> Sign Up</Link>
                </Button>
                <Button
                  className="bg-white text-textColor hover:bg-textColor hover:text-white"
                  sx={{ border: "1px solid white", color: "white" }}
                  endIcon={<LoginIcon />}
                >
                  <Link href={"/signin"}> Log in</Link>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
