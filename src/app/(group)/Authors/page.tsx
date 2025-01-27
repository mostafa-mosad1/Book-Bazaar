import {  Card, Typography } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AllAuthors from "@/components/AllAuthors";


function page() {


  return (
    <>
      <Card sx={{ marginBlock: "auto", textAlign: "center", padding: "5px" }}>
        <Diversity3Icon sx={{ fontSize: "50px" }} />
        <Typography sx={{ fontSize: "20px" }}>Authors</Typography>
      </Card>
     <AllAuthors/>
    </>
  );
}

export default page;
