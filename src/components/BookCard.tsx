import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicRating from "./Rating";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { useRouter } from "next/navigation";

export default function BookCard({
  img,
  id,
  title,
  author,
  rating,
}: {
  img: string;
  id: number;
  title: string;
  author: string;
  rating: number;
}) {
    const { push } = useRouter();
  
  const localData =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return (
   
     <Stack
      key={id}
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        maxWidth: { md: 250 },
        pb: "30px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
      }}
    >
      <Link href={`/book/${id}`} >
      <div
        onClick={() => {
          console.log("open");
        }}
        className="mx-3"
      >
        <CardMedia
          sx={{
            height: 200,
            borderRadius: "8px",
          }}
          image={img}
          title="green iguana"
        />

        <Typography  sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1, 
      }}  gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: "#CC9600" }}>
          {author}
        </Typography>
        <BasicRating rating={rating} />
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Available across all branches
        </Typography>
      </div>
      </Link>
      <div className="mx-3">
        {localData?<AddToCartButton id={id}/>: <Button
              variant="contained"
              type="submit"
              onClick={()=>{
                push("/signin");
              }}
              sx={{
                
                mt:"10px",
                backgroundColor: "#CC9600",
                mx: "auto",
                display: "block",
              }}
            >
              Log in to buy books
            </Button>}
      </div>
    </Stack>
   
  );
}
