import CategoriesPageContant from "@/components/CategoriesPageContant";

interface Iprops {	
    params: { id: string };
}	
 function page({params}:Iprops) {
    const id = params.id;


    return (
        <>
        <CategoriesPageContant id={id}  />
        </>
    )
}

export default page;