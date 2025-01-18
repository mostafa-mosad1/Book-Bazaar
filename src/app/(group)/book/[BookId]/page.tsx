import BookPageContant from "@/components/BookPageContant";


interface Iprops {
  params: {
    BookId: string;
  };
}
function page({ params }: Iprops) {
  let BookId = params.BookId;
  return (
    <>
    <BookPageContant BookId={BookId} />
    </>
  );
}

export default page;
