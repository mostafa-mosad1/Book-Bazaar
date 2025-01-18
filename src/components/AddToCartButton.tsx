"use client";

import {
  useAddToCartMutation,
  useDeleteToCartMutation,
  useGetCartBooksQuery,
} from "@/redux/features/Api/CartSlice";
import toast from "react-hot-toast";

interface Iprops {
  id: number;
}
function AddToCartButton({ id }: Iprops) {
  const [AddToCartFun] = useAddToCartMutation();
  const { data: CartData } = useGetCartBooksQuery("");
  const [DeleteCartFun] =
    useDeleteToCartMutation();

  const InCart = CartData?.payload?.books.some(
    (item: {
      bookId:number
    }) => item.bookId == id
  );

  return (
    <>
      <button
        onClick={ async () => {
          if (InCart) {
            DeleteCartFun(id);
            toast.error(`delete book with id ${id} from Cart`);
          } else {
            AddToCartFun(id);
            toast.success(`added book with id ${id} to Cart`);
          }
        }}
        type={"submit"}
        name="Add to Cart"
        className={`text-white w-[80%] block my-2 mx-auto p-2 rounded-md ${
          InCart ? "bg-red-500" : "bg-[#CC9600]"
        }
       `}
      >
        {InCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </>
  );
}

export default AddToCartButton;
