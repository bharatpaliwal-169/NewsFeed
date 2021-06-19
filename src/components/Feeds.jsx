import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import Card from './SingleNews';



export default function Feeds(props) {
  const [Feed , setFeed] = useState({});
  const [loading, setLoading] = useState(true);
  // const [country ,setCountry] = useState('in');
  // const [category ,setCategory] = useState('business');
  const [state,setState] = useState({country:'in' , category: 'business'});
  const url = `https://newsapi.org/v2/top-headlines?country=${state.country}&category=${state.category}&apiKey=1b3e355c8a6a49f88d9e060dc5e960a5`;
  

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
    .then((data) => {
      setFeed(data.articles);
      setLoading(false)
    })
  });

  if(loading) {
    return(
      <Loading />
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
    .then((data) => {
      setFeed(data.articles);
      setLoading(false)
    })
  }
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({...state,[name]:value});
  }
  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <section className="row">
          <div className="col-12">
            <form className="row">
              <div className="col-6 text-center">
                <label htmlFor="country">Choose a Country:</label>
                  <input name="country" id="country" value={state.country} onChange={handleChange}  />
                  <datalist>
                    <option value="in"/>
                    <option value="us"/>
                    <option value="jp"/>
                  </datalist>
              </div>
              <div className="col-6 text-center">
                <label htmlFor="Category">Choose a Category:</label>
                  <input list="category" name="category" id="category" value={state.category} onChange={handleChange} />
                  <datalist id="category">
                    <option value="business"/>
                    <option value="health"/>
                    <option value="sports"/>
                    <option value="technology"/>
                    <option value="entertainment"/>
                  </datalist>
              </div>
              <div className="col-8">
                <button className='btn btn-md btn-primary' onClick={handleSubmit}>
                  Modify Feed
                </button>
              </div>

            </form>
          </div>
        </section>

        <main className="row align-items-center justify-content-center">
          {Feed.map((item)=>{
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
