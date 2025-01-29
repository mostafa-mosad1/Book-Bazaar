"use client";
import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

function Leanding() {
  interface ISearch {
    search: string;
  }
  

  const {
    register,
    handleSubmit,
  } = useForm<ISearch>();
  const onSubmit: SubmitHandler<ISearch> = async (data) => {
    console.log(data);
  };
  return (
    <>
     <Stack
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/leading.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              border: "2px solid #CC9600",
              borderRadius: "4px",
              padding: "0px",
            }}
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl className="sm:w-32 md:w-96 mx-10 md:mx-0">
              <TextField
                sx={{
                  display: "block",
                  borderRadius: "none",
                  background: "#D6CE80",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
                id="search"
                label="Search"
                type="search"
                {...register("search")}
              />
            </FormControl>
            <Button
              variant="contained"
              // disabled={isLoading}
              type="submit"
              sx={{
                px: 6,
                py: "11px",
                fontSize: "1.25rem",
                backgroundColor: "#CC9600",
                display: "block",
                height: "100%",
                borderRadius: "0px",
              }}
            >
              {/* {isLoading ? <Loader /> : "SIGN UP"} */}
              Search
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Leanding;
