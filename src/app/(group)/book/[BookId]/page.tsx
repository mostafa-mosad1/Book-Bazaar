import BookPageContant from "@/components/BookPageContant";


interface Iprops {
  params: {
    BookId: string;
  };
}
function page({ params }: Iprops) {
  const BookId = params.BookId;
  return (
    <>
    <BookPageContant BookId={BookId} />
    </>
  );
}

export default page;
