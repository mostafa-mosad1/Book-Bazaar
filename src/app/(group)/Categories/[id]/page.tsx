import CategoriesPageContant from "@/components/CategoriesPageContant";

interface Iprops {	
    params: { id: string };
}	
async function page({params}:Iprops) {
    const id = await params.id;


    return (
        <>
        <CategoriesPageContant id={id}  />
        </>
    )
}

export default page;