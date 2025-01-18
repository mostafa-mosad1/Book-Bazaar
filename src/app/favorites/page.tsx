import FavContant from "@/components/FavContant";
import Navbar from "@/components/Navbar";

interface Iprops {}
function page({}: Iprops) {
  return (
    <>
      <Navbar />
      <FavContant />
    </>
  );
}

export default page;
