import Navbar from "@/components/Navbar";
import { Box, Container, Stack } from "@mui/material";
import { ReactNode } from "react";
import SideBar from "./../../components/SideBar";
import Leanding from "@/components/Leanding";

interface Iprops {
  children: ReactNode;
}
function layout({ children }: Iprops) {
  return (
    <>
      <Navbar />

      <Leanding />
      <Box sx={{backgroundColor:"white"}} >

      <Container>
        <Stack  direction={"row"} justifyContent={"space-between"}>
          <Box
            sx={{
              width: "25%",
              display: {
                xs: "none",
                md: "block",
              },
              background: "",
            }}
          >
            <SideBar />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "70%",
              },
              marginTop: "60px",
            }}
          >
            {children}
          </Box>
        </Stack>
      </Container>
      </Box>
    </>
  );
}

export default layout;
