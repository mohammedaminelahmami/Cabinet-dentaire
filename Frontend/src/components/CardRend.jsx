import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import img from '../imgs/img.jpg'
import DeleteIcon from '@mui/icons-material/Delete';

function CardRend(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>

        <div>
          <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p className='title'>{props.date} &nbsp;&nbsp;|&nbsp;&nbsp; {props.creneau}</p>
            </Typography>

            <Typography variant="body2" color="text.secondary">
                <p className='sujet'>Sujet</p>
              <CardContent>
                {props.sujet}
                <br></br>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardContent>
            </Typography>
            <Button variant="contained" startIcon={<DeleteIcon />}>Annuler Creneau</Button>
          </CardContent>

        </div>

      </Card>
    </div>
  )
}

export default CardRend