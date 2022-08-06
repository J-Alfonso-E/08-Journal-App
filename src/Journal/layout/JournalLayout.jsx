import { Box } from "@mui/system";
import { NavBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {

    return(
        <Box sx={{display: 'flex'}} >
            <Box component='main' sx={{flexGrow: 1, p:3}}>

                <NavBar drawerWidth={drawerWidth} />

                {children}
            </Box>
        </Box>
    )
}