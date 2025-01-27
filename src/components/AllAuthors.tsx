"use client";
import { Avatar, Card, Typography } from "@mui/material";
import { useGetAllAuthorsQuery } from "@/redux/features/Api/gategoriesSlice";
import Link from "next/link";
import Loader from "@/components/Loader";


function AllAuthors() {
    const { isLoading: loadingAuthors, data: AuthorsData } =
    useGetAllAuthorsQuery("");

    if (loadingAuthors)
        return (
          <div className="mt-28  mx-auto ">
            <Loader />
          </div>
        );

  const allAuthors = AuthorsData?.payload?.authors.map(
    (aut: {
      id: number;
      authorAvatarUrl: string;
      authorName: string;
      bio: string;
      birthDate: string;
      deathDate: string;
      numOfBooks: number;
    }) => (
      <Link key={aut.id} href={`/Authors/${aut.id}`}>
        <Card className="cursor-pointer text-center p-2 rounded-md my-4">
          <Avatar
            alt="..."
            src="/images/authorImage.png"
            sx={{ width: "200px", height: "" }}
          />
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "" }}
            component={"h2"}
          >
            {aut.authorName}
          </Typography>
          <p className="w-[80%] my-4 mx-auto block bg-textColor h-1" ></p>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "" }}
            component={"h2"}
          >
            {aut.numOfBooks} Books
          </Typography>
        </Card>
      </Link>
    )
  );
    return (
        <>
           <div className="flex gap-6 flex-wrap justify-center items-center">
        {allAuthors}
      </div>  
        </>
    )
}

export default AllAuthors;