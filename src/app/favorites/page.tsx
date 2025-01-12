"use client";
import Navbar from "@/components/Navbar";
import BasicRating from "@/components/Rating";
import { useDeleteToFavoritesMutation, useGetFavoritesBooksQuery } from "@/redux/features/Api/favoritesSlice";
import { Button, CardMedia, Container, Stack, Typography } from "@mui/material";

interface Iprops {}
function page({}: Iprops) {
  const { isLoading, data, error } = useGetFavoritesBooksQuery("");
 const [DeleteFun , {isLoading:isLoadingDelete,data:dataDelete,error:errorDelete}] =useDeleteToFavoritesMutation();
  console.log(data);
  let FavtBooks = data?.payload?.books?.map(
    (book: {
      book: {
        id: string;
        title: string;
        author: {
          authorName: string;
        };
      };
      totalReviewsRate: string;
    }) => (
      <Stack
        key={book.book.id}
        justifyContent={"space-between"}
        sx={{
          py: "30px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          width:{
            xs:"100%",
            md:"350px"
          }
        }}
      >
        <div className="mx-3">
          <CardMedia
            sx={{
              height: 270,
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
            {book.book.author.authorName}
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
        <Stack
          sx={{
            gap: "10px",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:"center",
            alignItems:"center",
            py:"30px"
          }}
        >
          {FavtBooks}
        </Stack>
      </Container>
    </>
  );
}

export default page;
