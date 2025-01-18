import { Box, Stack, Typography } from "@mui/material";
import SignForm from "@/components/SignUpForm";
import Image from "next/image";

function Signup() {
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
          // height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            padding: "10px",
          }}
        >
          <Typography
            variant="h3"
            className="text-textColor  font-bold  text-center "
            sx={{ marginBlock: "10px" }}
          >
            SIGN UP TO Bound Words!
          </Typography>
          <SignForm />
        </Box>
      </Box>
    </Stack>
  );
}

export default Signup;
