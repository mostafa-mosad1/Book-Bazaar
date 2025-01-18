import { Card, Typography } from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';

interface Iprops {	
     
}	
function page({}:Iprops) {
   
    return (
        <>
            <Card sx={{ marginBlock:"auto",textAlign:"center",padding:"5px",  }}>
                <Diversity3Icon sx={{fontSize:"50px",}} />
            <Typography sx={{fontSize:"20px",}} >Authors</Typography>
       
      </Card>
        </>
    )
}

export default page;