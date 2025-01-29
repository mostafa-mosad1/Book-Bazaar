import Navbar from "@/components/Navbar";
import { Box, Container, Stack } from "@mui/material";
import SideBar from "@/components/SideBar";
import Leanding from "@/components/Leanding";
import HomeContant from "@/components/HomeContant";

export default function Home() {
  return (
    <>
    <Navbar />
    <Leanding />
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
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
                 <HomeContant />

          </Box>
        </Stack>
      </Container>
    </Box>
    </>
  );
}
