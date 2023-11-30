import './FilmCard.scss'
import movieLogo from "../../assets/movieinfo.png";
import menuButtonLogo from "../../assets/Menu.png"; 

function FilmCard(props) {

  const {title} = props

  return (
    <div className='filmcard-container'>
      <div className="filmcard-boxarea">
      <div className='filmcard-image'>
      </div>
      <div className='filmcard-info'>
        <div>
          <img src={movieLogo} alt="" />
          <span className='moviecard-name'>{title}</span>
        </div>
        <button className='moviecard-menubutton'>
          <img src={menuButtonLogo} alt="" />
        </button>
      </div>
      </div>
    </div>
  )
}

export default FilmCard