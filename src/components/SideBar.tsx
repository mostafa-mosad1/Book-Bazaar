"use client";
import { Box, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import {
  useGetAllAuthorsQuery,
  useGetAllCategoriesQuery,
} from "@/redux/features/Api/gategoriesSlice";
import Loader from "./Loader";
import Link from "next/link";

interface Iprops {}
function SideBar({}: Iprops) {
  const { isLoading, data, error } = useGetAllCategoriesQuery("");
  const {
    isLoading: loadingAuthors,
    data: AuthorsData,
    error: errorAuthors,
  } = useGetAllAuthorsQuery("");
  const allGategories = data?.payload?.categories.map(
    (cate: { id: number; categoryName: string }) => (
      <Link key={cate.id} href={`/Categories/${cate.id}`}>
        <Typography className="cursor-pointer p-2 hover:text-white rounded-md my-4 hover:bg-[#CC9600]">
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{ fontSize: "1.2rem", fontWeight: "" }}
              component={"h2"}
            >
              {cate.categoryName}
            </Typography>
            <MenuBookIcon sx={{ fontSize: "1.5rem", fontWeight: "bold" }} />
          </Stack>
        </Typography>
      </Link>
    )
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
      <Link href={`/Authors/${aut.id}`}>
        <Typography
          key={aut.id}
          className="cursor-pointer p-2 hover:text-white rounded-md my-4 hover:bg-[#CC9600]"
          onClick={() => {
            console.log(aut.authorName);
          }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{ fontSize: "1.2rem", fontWeight: "" }}
              component={"h2"}
            >
              {aut.authorName}
            </Typography>
            <PersonIcon sx={{ fontSize: "1.5rem", fontWeight: "bold" }} />
          </Stack>
        </Typography>
      </Link>
    )
  );
  return (
    <>
      <Box sx={{ position: "sticky", top: "60px" }}>
        <Box
          sx={{
            mt: "200px",
            boxShadow: 3,
            padding: "8px",
          }}
        >
          <Typography>
            <Stack
              sx={{ my: "10px" }}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                component={"h2"}
              >
                Categories
              </Typography>
              <SearchIcon sx={{ fontSize: "2.5rem", fontWeight: "bold" }} />
            </Stack>
          </Typography>
          {isLoading ? <Loader /> : allGategories}
        </Box>
        <Box sx={{ my: "40px", boxShadow: 3, padding: "8px" }}>
          <Typography>
            <Stack
              sx={{ my: "10px" }}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                component={"h2"}
              >
                AUthors
              </Typography>
              <SearchIcon sx={{ fontSize: "2.5rem", fontWeight: "bold" }} />
            </Stack>
          </Typography>
          {loadingAuthors ? <Loader /> : allAuthors}
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
