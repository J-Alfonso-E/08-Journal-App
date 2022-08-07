import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "./ImageGallery";

export const NoteView = () => {
    return(
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1}}>
            <Typography fontSize={39} fontWeight="light">1 de Agosto del 2022</Typography>

            <Grid item>
                <Button color="primary" sx={{padding:2}}>
                    <SaveOutlined sx={{fontSize: 30, mr:1}} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField type="text" variant='filled' fullWidth placeholder="Titulo" label="Titulo" sx={{border: 'none', mb:1}} />

                <TextField type="text" variant='filled' multiline minRows={5} fullWidth placeholder="Como te fue el dia de hoy?" label="" sx={{border: 'none', mb:1}} />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}