import SignInForm from "@/components/SignInForm";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

function page() {
  return (
    <Stack sx={{ height: "100vh", background: "black" }} direction={"row"}>
      <Box
        sx={{
          height: "100vh",
          width: "50%",
          background: "cyan",
          position: "relative",
        }}
      >
        <Image
          src="/images/signIn.png"
          alt="Sign In"
          layout="fill"
          objectFit="filter"
          
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction={"column"} spacing={2}>
          <Typography
            variant="h2"
            className="text-textColor  font-bold mb-8 text-center "
          >
            Welcome to Bound Words!
          </Typography>
          
          {<SignInForm />}
        
        </Stack>
      </Box>
    </Stack>
  );
}

export default page;
