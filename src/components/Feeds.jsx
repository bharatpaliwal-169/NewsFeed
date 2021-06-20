import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import Card from './SingleNews';
// import NotFound from './NotFound';


export default function Feeds(props) {
  const [Feed , setFeed] = useState({});
  const [loading, setLoading] = useState(true);
  // const [country ,setCountry] = useState('in');
  // const [category ,setCategory] = useState('business');
  const [state,setState] = useState({country:'in' , category: 'business' , query: ''});
  const [store,setStore] = useState({country:'' , category: '',query: ''})
  const url = `https://newsapi.org/v2/top-headlines?country=${state.country}&category=${state.category}&q=${state.query}&apiKey=1b3e355c8a6a49f88d9e060dc5e960a5`;

  useEffect(()=>{
    // let isCanclled = false;
      fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then((data) => {
        setFeed(data.articles);
        setLoading(false)
      })
    
    // return () => isCanclled = true;
    
  },[url]);

  if(loading) {
    return(
      <Loading />
    )
  }

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
  return (
    <React.Fragment>
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
                      <option value="business">business</option>
                      <option value="health">health</option>
                      <option value="sports">sports</option>
                      <option value="general">general</option>
                      <option value="technology">technology</option>
                      <option value="entertainment">entertainment</option>
                  </select>
              </div>

              {/* <div className="col-12 col-sm-3 text-center">
                <label htmlFor="search">Search :</label>
                <input type="text" name="query" value={store.query} onChange={handleChange} />
              </div> */}

              <div className="col-12 col-sm-4 text-center">
                <button className='btn btn-md btn-outline-primary' onClick={handleSubmit}>
                  Modify Feed
                </button>
              </div>

            </form>
          </div>
        </section>

        <main className="row align-items-center justify-content-center">

          {Feed.map((item)=>{
            // console.log(Feed);
            
            return(
              <Card {...item} key={item.publishedAt} />
            )
          })}
        </main>
      </div>
      <Footer />
    </React.Fragment>
  )
}
