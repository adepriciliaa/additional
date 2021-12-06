import React from 'react';
import Card from '@mui/material/Card';
import { CardActions, InputAdornment } from '@mui/material';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Icon } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// const useStyles = makeStyles({
//     root: {
//         "&:hover": {
//             backgroundColor: "transparent"
//         }
//     }
// })

export default function CardContainer(props) {
    //const classes = useStyles();
    return (
        <Card sx={{ maxWidth: 400, m: 2, borderRadius: 1.5, boxShadow: 0 }}>
            <CardActions disableSpacing>
                <Icon sx={{ fontSize: 40 }}>
                    <FiberNewIcon color="disabled" sx={{ fontSize: 40 }} />
                </Icon>
                <IconButton >
                    <ListIcon color="disabled" sx={{ fontSize: 30, pl: 30 }} />
                </IconButton>
                <IconButton >
                    <FavoriteBorderIcon color="disabled" sx={{ fontSize: 30 }} />
                </IconButton>
            </CardActions>

            <CardMedia
                component="img"
                height="300"
                image={props.Sofa}
                alt="Foto Item"
            />

            <CardContent>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    {props.Nama}
                </Typography>
                <Box
                    sx={{
                        width: 375,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt: 4
                    }}
                >
                    <Rating
                        name="text-feedback"
                        value={props.Rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}


                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={props.Harga}
                        size="small"
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <ShoppingCartIcon color="disabled" />
                                </InputAdornment>
                            )

                        }}
                        sx={{ pl: 10 }}
                    />



                </Box>

            </CardContent>



        </Card>
    )
}
