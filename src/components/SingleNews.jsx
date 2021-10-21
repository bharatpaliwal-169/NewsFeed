import React from 'react'
// import {Card ,Button} from 'react-bootstrap'
import{Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button} from '@material-ui/core'

export default function SingleNews(props) {
  const title = props.title;
  var img = props.image;
  if(img === null){
    img = '/images/default.jpg';
  }
  const date = props.publishedAt;
  const content = props.description;
  const url = props.url;
  var author = props.source.name;
  if(author === null){
    author = 'Unknown';
  }
  return (
    <React.Fragment>
      <div className="col-12 col-sm-4 mt-2 mb-2 ">
        <Card className='card-x' variant='outlined'>
          <CardActionArea>
            <a href={url} target="_blank" rel="noreferrer"  >
              <CardMedia
                component="img"
                alt={date}
                height="240"
                image={img}
                title="Contemplative Reptile"
                />
            </a>
          </CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title.length > 20 ? title.substring(0, 20) : title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content.length > 100 ? content.substring(0,100) : content}
            </Typography>
          </CardContent>

          <CardActions>
            <a href={url} target="_blank" rel="noreferrer" className="nav-link">
              <Button size="large" color="primary" variant="contained">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </React.Fragment>
  )
}
