"use client";
import { SignInFormData } from "@/data";
import { IFormInputSignIn } from "@/Interface";
import { useSigninMutation } from "@/redux/features/Api/Authapi";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "./InputError";
import { signinSchema } from "@/validation/schema";
import Loader from "./Loader";

interface Iprops {}
function SignInForm({}: Iprops) {
  const { push } = useRouter();

  const [SignInFunction, { isLoading, data, error }] = useSigninMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputSignIn>({
    resolver: yupResolver(signinSchema),
  });
  const onSubmit: SubmitHandler<IFormInputSignIn> = async (data) => {
    console.log(data);
    0;

    try {
      const res: any = await SignInFunction(data);
      if (res.error) {
        toast.error(`${res.error.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
      }
      if (res.data) {
        toast.success(`${res.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
        localStorage.setItem("token", res.data.payload.token);
        push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const SignInInputs = SignInFormData.map((input,index) => (
    <>
      <TextField key={index}
        {...register(input.id)}
        sx={{
          display: "block",
          background: "#D6CE80",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", 
            },
          },
        }}
        fullWidth
        id={input.id}
        label={input.label}
        variant="outlined"
        type={input.type}
      />

      {errors[input.id] && <InputError msg={errors[input.id]?.message} />}
    </>
  ));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          // alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          spacing={2}
          sx={{ width: "70%", margin: "auto" }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              width: "100%",
              mx: "auto",
              fontSize: "1.25rem",
              lineHeight: 1.5,
              px: 4,
            }}
            component="p"
          >
            Discover a seamless way to sell your books and unlock exclusive
            benefits. Enjoy a hassle-free experience, save valuable time, and
            take advantage of our amazing offers.
          </Typography>
          {SignInInputs}
          <Typography
            sx={{ marginLeft: "AUTO", color: "#D6CE80", textAlign: "end" }}
          >
            Forgot Password?
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              disabled={isLoading}
              type="submit"
              sx={{
                px: 10,
                fontSize: "1.25rem",
                mt: 0,
                backgroundColor: "#CC9600",
                ml: "auto",
                display: "block",
              }}
            >
              {isLoading ? <Loader /> : "Submit"}
            </Button>
          </Box>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ color: "white" }}>
              Don't you have an account? 
            </Typography>
            <Button onClick={()=>{
              push("/signup");
            }} sx={{ color: "#CC9600" }}>Create an account</Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
}

export default SignInForm;
