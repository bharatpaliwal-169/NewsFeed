import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import Single from './SingleNews';

import {Button} from '@material-ui/core'

export default function Feeds(props) {
  const [Feed , setFeed] = useState({});
  const [loading, setLoading] = useState(true);
  const [state,setState] = useState({country:'in' , category: 'business' , query: ''});
  const [store,setStore] = useState({country:'' , category: '',query: ''})

  //api
  const API_Token = '98d217441b00c0f4332d5350dcde924c';
  const url = `https://gnews.io/api/v4/top-headlines?country=${state.country}&topic=${state.category}&language=en&token=${API_Token}`;
  
  useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then((data) => {
        // console.log(data);
        setFeed(data.articles);
        setLoading(false)
      })  
  },[url]);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setState({...state,
      country : store.country,
      category : store.category,
      query: store.query
    })
  }
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStore({...store,[name]:value});
  }
  
  const Main = () => {
    return (
      <>
        <Header />
          <div className="container">
              <section className="row mt-5 mb-5">
                <div className="col-12 mt-5">
                  <form className="row">
                    <div className="col-6 col-sm-4 text-center">
                      <label htmlFor="country" className="me-2">Choose a Country: </label>
                        <select name="country" id="country" value={store.country} onChange={handleChange} >
                            <option value="in"> India </option>
                            <option value="us"> USA </option>
                            <option value="jp"> Japan </option>
                            <option value="au"> Australia </option>
                        </select>
                    </div>

                    <div className="col-6 col-sm-4 text-center">
                      <label htmlFor="Category">Choose a Category:</label>
                        <select  name="category" id="category" value={store.category} onChange={handleChange}>
                            <option value="breaking-news">breaking-news</option>
                            <option value="business">business</option>
                            <option value="health">health</option>
                            <option value="sports">sports</option>
                            <option value="technology">technology</option>
                            <option value="entertainment">entertainment</option>
                        </select>
                    </div>
      
                    {/* <div className="col-12 col-sm-3 text-center">
                      <label htmlFor="search">Search :</label>
                      <input type="text" name="query" value={store.query} onChange={handleChange} />
                    </div> */}
      
                    <div className="col-12 col-sm-4 text-center">
                      <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
                        Modify Feed
                      </Button>
                    </div>
      
                  </form>
                </div>
              </section>
      
              <main className="row align-items-center justify-content-center">
      
                {Feed.map((item)=>{
                  // console.log(Feed);
                  return(
                    <Single {...item} key={item.publishedAt} />
                  )
                })}
              </main>
            </div>
          <Footer />
        </>
    )
  }
  return (
    <React.Fragment>
      {loading ? <Loading /> : <Main />}
    </React.Fragment>
  )
}

