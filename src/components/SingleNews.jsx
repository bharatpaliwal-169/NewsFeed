import React from 'react'
import {Card ,Button} from 'react-bootstrap'


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
      <Card border='light' className='card-x'>
        <a href={url} target="_blank" rel="noreferrer" >
          <Card.Img variant="top" src={img} alt={date} height="240" />
        </a>
        <Card.Body>
          
          <Card.Title className="mt-3 mb-3">{title}</Card.Title>
          
          <Card.Text className='text-muted'>
            {content}
          </Card.Text>

          <a href={url} target="_blank" rel="noreferrer"  >
            <Button variant="outline-primary">Read More</Button>
          </a>
          
          <Card.Footer className="text-muted mt-4 mb-2">
            News Author : {author}
          </Card.Footer>
        </Card.Body>
      </Card>
      </div>
    </React.Fragment>
  )
}
