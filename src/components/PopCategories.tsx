import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useGetAllCategoriesQuery } from "@/redux/features/Api/gategoriesSlice";
import Link from "next/link";
import { Stack } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function PopCategories() {
  const {  data } = useGetAllCategoriesQuery("");

  const allGategories = data?.payload?.categories.map(
    (cate: { id: number; categoryName: string }) => (
      <Link
        key={cate.id}
        onClick={() => handleClose()}
        href={`/Categories/${cate.id}`}
      >
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

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        sx={{
          textAlign: "center",
          textTransform: "capitalize",
          backgroundColor:"transparent",
          border:"none",
          color:{sm:"black",md:"white"},
          boxShadow:"none",fontWeight:"semibold"
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Categories
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {allGategories}
      </Popover>
    </div>
  );
}
