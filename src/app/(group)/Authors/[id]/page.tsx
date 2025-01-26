import AuthorsContant from "@/components/AuthorsContant";

interface Iprops {
  params: Promise<{ id: string }>;
}
 async function page(props: Iprops) {
   const params = await props.params;
   const id = await params.id;

   return (
     <>
       <AuthorsContant id={id} />
     </>
   );
 }

export default page;



