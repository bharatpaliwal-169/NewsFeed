import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
export default function Feeds(props) {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b3e355c8a6a49f88d9e060dc5e960a5';
  const [Feed , setFeed] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
    .then((data) => {
      setFeed(data.articles);
      setLoading(false)
    })
  },[]);

  if(loading) {
    return(
      <Loading />
    )
  }
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          News Feed : 
          {console.log(Feed)}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
