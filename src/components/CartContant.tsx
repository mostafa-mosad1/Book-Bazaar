"use client";
import {
  useDeleteToCartMutation,
  useGetCartBooksQuery,
} from "@/redux/features/Api/CartSlice";
import { Button, Container } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import BasicRating from "@/components/Rating";
import Image from "next/image";
import Loader from "./Loader";

function CartContant() {
  const { isLoading, data } = useGetCartBooksQuery("");
  const [DeleteFun] = useDeleteToCartMutation();
  if (isLoading)
    return (
      <div className="h-[50vh] flex justify-center items-center ">
        <Loader />
      </div>
    );
  const CartBooks = data?.payload?.books?.map(
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
          height: "400px",
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
            {/* {LoadingDelete ? (
              <ClipLoader color="#CC9600" size={50} />
            ) : (
              "Remove"
            )} */}
            Remove
          </Button>
        </div>
      </Stack>
    )
  );
  return (
    <>
      <Container>
        <Stack
          sx={{ flexWrap: "wrap", paddingBlock: "50px" }}
          gap={"20px"}
          direction={"row"}
          justifyContent={"center"}
        >
          {data?.payload?.books.length == 0 ? (
            <div className="flex flex-col w-full  justify-center items-center h-[80vh]">
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
        </Stack>
      </Container>
      <div className="bg-black absolute inset-x-0 bottom-0 ">
        <div className="flex gap-8 flex-wrap lg:flex-nowrap  container text-white p-4 justify-around">
          <p className="font-normal text-lg capitalize">
            Number Of Books : {data?.payload?.books?.length}
          </p>
          <p>estimated sales tax : 00%</p>
          <p>All tax : 00 </p>
          <p>estimated total : Free </p>

          <Button
            variant="contained"
            type="submit"
            sx={{
              px: 10,
              fontSize: "1.25rem",
              backgroundColor: "#CC9600",
              display: "block",
            }}
          >
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartContant;
