import CartContant from "@/components/CartContant";
import Navbar from "@/components/Navbar";

interface Iprops {}
function Cart({}: Iprops) {
  return (
    <>
      <Navbar />
      <CartContant />
    </>
  );
}

export default Cart;
