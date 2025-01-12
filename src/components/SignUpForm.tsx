/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FormSignup } from "@/data";
import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISignup } from "@/Interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/validation/schema";
import InputError from "./InputError";
import { useSignupMutation } from "@/redux/features/Api/Authapi";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function SignForm() {
  const { push } = useRouter();
  const [signupUser, { isLoading }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit: SubmitHandler<ISignup> = async (data) => {
    try {
      const res: any = await signupUser(data);
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
        push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderSignup = FormSignup.map((el, idx) => (
    <FormControl key={idx} className="w-full mb-3 ">
      <TextField
        sx={{
          display: "block",
          background: "#D6CE80",
          my: "6px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
        id={el.id}
        label={el.label}
        type={el.type}
        {...register(el.id)}
      />
      {errors[el.id] && <InputError msg={errors[el.id]?.message} />}
    </FormControl>
  ));
  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {renderSignup}
        <FormControl
          sx={{
            marginTop: "6px",
            pl: 2,
            display: "block",
            background: "#D6CE80",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        >
          <FormLabel>Gender</FormLabel>
          <RadioGroup row aria-labelledby="gender-radio-group">
            <FormControlLabel
              value="female"
              {...register("gender")}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              {...register("gender")}
              control={<Radio />}
              label="Male"
            />
          </RadioGroup>
          {errors.gender && <InputError msg={"Enter Your Gender"} />}
        </FormControl>
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
              marginBlock: 3,
            }}
          >
            {isLoading ? <Loader /> : "SIGN UP"}
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "14px",
          textAlign: "center",
          mt: "10px",
          color: "white",
        }}
      >
        Unlock a world of knowledge by registering with us today!
      </Typography>
    </>
  );
}

export default SignForm;
