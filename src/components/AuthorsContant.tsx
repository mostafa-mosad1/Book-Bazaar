"use client";
import BookCard from "@/components/BookCard";
import Loader from "@/components/Loader";
import { useGetAuthorBooksByIdQuery } from "@/redux/features/Api/gategoriesSlice";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";

interface Iprops {
  id: string;
}
function AuthorsContant({ id }: Iprops) {
  const { isLoading, data } = useGetAuthorBooksByIdQuery(id);
  if (isLoading)
    return (
      <div className="mt-28  mx-auto ">
        <Loader />
      </div>
    );

  const allBooks = data?.payload?.books.map(
    (book: {
      id: number;
      title: string;
      subTitle: string;
      desc: string;
      coverUrl: string;
      totalReviewsRate: number;
      author: {
        authorName: string;
      };
    }) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        img={"/images/bookImage.png"}
        author={book.author.authorName}
        rating={
          book.totalReviewsRate
            ? book.totalReviewsRate
            : Math.floor(Math.random() * 5) + 1
        }
      />
    )
  );
  return (
    <>
      <Card key={data?.payload.author.authorName} sx={{ padding: "4px" }}>
        <Stack sx={{flexWrap:{
          xs:"wrap",
          lg:"nowrap"
        }}} direction={"row"}>
          <Avatar
            alt="..."
            src="/images/authorImage.png"
            sx={{ width: "200px", height: "" }}
          />
          <Box sx={{ ml: {
            xs:'15px',
            lg:"100px"
          }, paddingTop: "30px" }}>
            <Typography component={"h2"} variant="h4" sx={{ color: "#CC9600" }}>
              {data?.payload.author.authorName}
            </Typography>
            <Typography component={"p"}>
              Birth Date : {data?.payload.author.birthDate.slice(0, 10)}
            </Typography>
            <Typography component={"p"}>
              Bio :{" "}
              {data?.payload.author.bio ? data?.payload.author.bio : "No Bio"}
            </Typography>
            <Typography component={"p"}>
              {data?.payload.books.length} Books
            </Typography>
          </Box>
        </Stack>
      </Card>

      <Card sx={{ margin: "40px", padding: "4px" }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img className="size-10" src="/images/bookAuthor-Icon.svg" />
          <Typography sx={{ color: "#CC9600" }} component={"h5"} variant="h5">
            Books of author
          </Typography>
        </Stack>
      </Card>

      <div className="flex flex-wrap gap-4 my-10 justify-center">
        {allBooks}
      </div>
    </>
  );
}

export default AuthorsContant;
