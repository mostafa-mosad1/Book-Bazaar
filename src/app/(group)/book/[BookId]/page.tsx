import BookPageContant from "@/components/BookPageContant";


interface Iprops {
  params: {
    BookId: string;
  };
}
async function page({ params }: Iprops) {
  const BookId = await params.BookId;
  return (
    <>
    <BookPageContant BookId={BookId} />
    </>
  );
}

export default page;
