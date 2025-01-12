"use client";
import Navbar from "@/components/Navbar";
import {
  useDeleteToCartMutation,
  useGetCartBooksQuery,
} from "@/redux/features/Api/CartSlice";
import { Button, Container, Input } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Link from "next/link";
import BasicRating from "@/components/Rating";
import AddToCartButton from "@/components/AddToCartButton";
import cartImage from "../../../public/images/cartEmpty.png";
import Image from "next/image";

interface Iprops {}
function Cart({}: Iprops) {
  const { isLoading, data, error } = useGetCartBooksQuery("");
  const [DeleteFun, { data: dataDelete, error: errorDelete }] =
    useDeleteToCartMutation();
 
  let CartBooks = data?.payload?.books?.map(
    (book: {
      book: {
        id: string;
        title: string;
        author: string;
      };
      totalReviewsRate: string;
    }) => (
      <Stack
        key={book.book.id}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          maxWidth: { md: 250 },
          pb: "30px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
        }}
      >
        <div className="mx-3">
          <CardMedia
            sx={{
              height: 200,
              borderRadius: "8px",
            }}
            image={"/images/bookImage.png"}
            title="green iguana"
          />

          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {book.book.title}
          </Typography>
          <Typography variant="h5" sx={{ color: "#CC9600" }}>
            {book.book.author}
          </Typography>
          <BasicRating
            rating={
              (book.totalReviewsRate
                ? book.totalReviewsRate
                : Math.floor(Math.random() * 5) + 1) as number
            }
          />
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Available across all branches
          </Typography>
        </div>
        <div className="mx-3">
          <Button
            variant="contained"
            type="submit"
            onClick={() => {
              DeleteFun(book?.book?.id);
            }}
            sx={{
              mx: "auto",
              fontSize: "1.25rem",
              backgroundColor: "red",
              my: "5px",
              display: "block",
            }}
          >
            Remove
          </Button>
        </div>
      </Stack>
    )
  );
  return (
    <>
      <Navbar />
      <Container>
        <Stack sx={{ height: "80vh" }} gap={"4px"} direction={"row"}>
          <div className="w-[70%]">
            <div className="flex flex-wrap gap-4 my-10 justify-center">
              {data?.payload?.books.length == 0 ? (
                <div className="flex justify-center items-center h-[80vh]">
                  <Typography variant="h4">No Books found.</Typography>
                  <Image
                    src="/images/cartEmpty.png"
                    alt="logo"
                    width="500"
                    height={"500"}
                  />
                </div>
              ) : (
                CartBooks
              )}
            </div>
          </div>

          <div className=" w-[30%] flex-col text-start gap-4 flex justify-center  items- border-b-2 border-foreground py-2">
            <p className="font-normal text-center text-lg capitalize">
              continue shopping
            </p>
            <p className="font-normal text-lg capitalize">
              Number Of Books : {data?.payload?.books?.length}
            </p>
            <p className="font-normal text-lg capitalize">
              need help ? call (+20) 111-222
            </p>

            <div className="right">
              <div>
                <p className="capitalize font-normal text-lg">
                  enter promo code
                </p>
                <div className="flex space-y-4 mt-2 ">
                  <Input placeholder="Enter Promo" />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      fontSize: "1.25rem",
                      mt: 0,
                      backgroundColor: "#CC9600",
                      ml: "auto",
                      display: "block",
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <h3 className="capitalize text-lg mt-3">
                  <Link href={"/signin"}>
                    <span className="text-yellow-700 cursor-pointer underline text-lg">
                      signin
                    </span>
                  </Link>
                  to your account to see available <br /> rewards
                </h3>
                <div className="capitalize space-y-4 font-normal text-lg mt-2">
                  <p>estimated sales tax : 00%</p>
                  <p>All tax : 00 </p>
                  <p>estimated total : Free </p>
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    px: 10,
                    fontSize: "1.25rem",
                    my: 4,
                    backgroundColor: "#CC9600",
                    ml: "auto",
                    display: "block",
                  }}
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default Cart;
