"use client";
import BookCard from "@/components/BookCard";
import Loader from "@/components/Loader";
import { useGetAllBooksByCategoryQuery } from "@/redux/features/Api/gategoriesSlice";

interface Iprops {
  id: string;
}
function CategoriesPageContant({ id }: Iprops) {
  const { isLoading, data } = useGetAllBooksByCategoryQuery(id);
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
        id: number;
      };
    }) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        img={"/images/bookImage.png"}
        author={book.author.authorName}
        rating={book.totalReviewsRate}
      />
    )
  );
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">{allBooks}</div>
    </>
  );
}

export default CategoriesPageContant;
