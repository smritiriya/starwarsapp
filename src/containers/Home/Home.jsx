import homepageBanner from "../../assets/home_page_banner.png";
import './Home.scss';

function Home() {
  
  

  return (
    <div className='homepage-container'>
      <div className='homepage-card'>
        <div className="homepage-card-image-container">
          <img src={homepageBanner} alt="" className="homepage-card-image" />
        </div>
        <h1>Welcome to Star Wars Dashboard</h1>
        <div className="homepage-card-text">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</div>
      </div>
    </div>
  )
}

export default Home