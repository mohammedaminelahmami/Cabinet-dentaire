import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import img from '../imgs/img.jpg'

function CardRend(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>

        <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.creneau}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </Typography>
          </CardContent>

        </CardActionArea>

        <CardActions>
          {/* <Button size="small" color="primary">
            view
          </Button> */}
        </CardActions>

      </Card>
    </div>
  )
}

export default CardRend