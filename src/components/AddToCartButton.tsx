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
  const [AddToCartFun, { isLoading, data, error }] = useAddToCartMutation();
  const { data: CartData } = useGetCartBooksQuery("");
  const [DeleteCartFun, { data: dataDelete, error: errorDelete }] =
    useDeleteToCartMutation();

  const InCart = CartData?.payload?.books.some(
    (item: any) => item.bookId == id
  );
  console.log(InCart);

  return (
    <>
      <button
        onClick={() => {
          if (InCart) {
            DeleteCartFun(id);
            toast.error(`delete book with id ${id} to favorites`);
          } else {
            AddToCartFun(id);
            toast.success(`added book with id ${id} to favorites`);
          }
        }}
        type={"submit"}
        name="Add to Cart"
        className={`text-white w-[80%] block my-2 mx-auto p-2 rounded-md ${
          InCart ? "bg-red-500" : "bg-[#CC9600]"
        }
       `}
      >
        {InCart ? "Remove TO CART" : "ADD TO CART"}
      </button>
    </>
  );
}

export default AddToCartButton;
