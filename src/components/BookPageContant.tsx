"use client";
import BookCard from "@/components/BookCard";
import BasicRating from "@/components/Rating";
import { useGetSingleBookQuery } from "@/redux/features/Api/HomeSlice";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Loader from "@/components/Loader";
import {
  useAddToCartMutation,
  useDeleteToCartMutation,
  useGetCartBooksQuery,
} from "@/redux/features/Api/CartSlice";
import {
  useAddToFavoritesMutation,
  useDeleteToFavoritesMutation,
  useGetFavoritesBooksQuery,
} from "@/redux/features/Api/favoritesSlice";
import toast from "react-hot-toast";
interface Iprops {
  BookId: string;
}
function BookPageContant({ BookId }: Iprops) {
  const { data: CartData } = useGetCartBooksQuery("");
  const [
    addFavFun,
    { isLoading: isLoadingAddFav },
  ] = useAddToFavoritesMutation();

  const [
    AddToCartFun,
    { isLoading: isLoadingAddCart },
  ] = useAddToCartMutation();
  const { data: FavData } = useGetFavoritesBooksQuery("");
  const [
    DeleteFavFun,
    { isLoading: isLoadingFavDelete },
  ] = useDeleteToFavoritesMutation();
  const [
    DeleteCartFun,
    {
      isLoading: isLoadingCartDelete,
    },
  ] = useDeleteToCartMutation();

  

  const { isLoading, data } = useGetSingleBookQuery(BookId);

  if (isLoading)
    return (
      <div className="mt-28  mx-auto ">
        <Loader />
      </div>
    );

  const recommendationBooks = data?.payload?.recommendations.map(
    (book: {
      id: number;
      title: string;
      subTitle: string;
      desc: string;
      coverUrl: string;
      totalReviewsRate: number;
      author: {
        authorName: string;
        id: number;
      };
    }) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        img={"/images/bookImage.png"}
        author={book.author.authorName}
        rating={book.totalReviewsRate}
      />
    )
  );

  const InCart = CartData?.payload?.books.some(
    (item: {bookId:number}) => item.bookId == data?.payload.book.id
  );
  const InFav = FavData?.payload?.books.some(
    (item: {bookId:number}) => item.bookId == data?.payload.book.id
  );
  return (
    <>
      <Card sx={{ position: "relative" }}>
        <Stack
          sx={{
            padding: "40px",
            flexWrap: "wrap",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
          direction={"row"}
        >
          <div className="flex gap-4  w-fit absolute top-8  right-8">
            <Button>
              {isLoadingAddCart || isLoadingCartDelete ? (
                "Loading...."
              ) : (
                <AddShoppingCartIcon
                  sx={{ cursor: "pointer", color: InCart ? "green" : "gray" }}
                  onClick={() => {
                    if (InCart) {
                      DeleteCartFun(data?.payload.book.id);
                      toast.error(`delete book with id ${BookId} from Cart`);
                    } else {
                      AddToCartFun(data?.payload.book.id);
                      toast.success(`added book with id ${BookId} to Cart`);
                    }
                  }}
                />
              )}
            </Button>
            <Button>
              {isLoadingAddFav || isLoadingFavDelete ? (
                "Loading...."
              ) : (
                <FavoriteIcon
                  sx={{ cursor: "pointer", color: InFav ? "red" : "gray" }}
                  onClick={() => {
                    if (InFav) {
                      DeleteFavFun(data?.payload.book.id);
                      toast.error(
                        `delete book with id ${BookId} from favorites`
                      );
                    } else {
                      addFavFun(data?.payload.book.id);
                      toast.success(
                        `added book with id ${BookId} to favorites`
                      );
                    }
                  }}
                />
              )}
            </Button>
          </div>
          <CardMedia
            sx={{
              width: "300px",
              height: "300px",
              borderRadius: "8px",
            }}
            image={"/images/bookImage.png"}
            title="green iguana"
          />
          <Box
            sx={{
              ml: {
                xs: "0px",
                md: "100px",
              },
              paddingTop: "30px",
            }}
          >
            <Typography component={"h2"} variant="h4" sx={{ color: "#CC9600" }}>
              {data?.payload.book.title}
            </Typography>
            <BasicRating rating={data?.payload.book.totalReviewsRate} />
            <Typography component={"p"}>
              Author Name : {data?.payload.book.author.authorName}
            </Typography>
            <Typography component={"p"}>
              Category : {data?.payload.book.category.categoryName}
            </Typography>
            <Typography component={"p"}>
              Price :{" "}
              {data?.payload.book.price ? data?.payload.book.price : "Free"}
            </Typography>
            <Typography component={"p"}>
              Language : {data?.payload.book.lang}
            </Typography>
            <Typography component={"p"}>
              Type : {data?.payload.book.format}
            </Typography>
          </Box>
        </Stack>
      </Card>
      <Card sx={{ margin: "40px", padding: "10px", textAlign: "center" }}>
        <Typography sx={{ color: "#CC9600" }} component={"h5"} variant="h5">
          Recommendation Books
        </Typography>
      </Card>

      <div className="flex flex-wrap gap-4 justify-center mt-10 ">
        {recommendationBooks}
      </div>
    </>
  );
}

export default BookPageContant;
