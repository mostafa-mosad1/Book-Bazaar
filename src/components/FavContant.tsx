"use client";
import BasicRating from "@/components/Rating";
import { useDeleteToFavoritesMutation, useGetFavoritesBooksQuery } from "@/redux/features/Api/favoritesSlice";
import { Button, CardMedia, Container, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import Image from "next/image";



function FavContant() {
    const { isLoading, data } = useGetFavoritesBooksQuery("");
    const [DeleteFun ] =useDeleteToFavoritesMutation();
    if (isLoading)
        return (
          <div className="h-[50vh] flex justify-center items-center ">
            <Loader />
          </div>
        );
    const FavtBooks = data?.payload?.books?.map(
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
          sx={{
            gap: "10px",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:"center",
            alignItems:"center",
            py:"30px"
          }}
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
          ) :FavtBooks}
        </Stack>
      </Container>
        </>
    )
}

export default FavContant;