import searchIcon from "../../assets/searchicon.png";
import './Searchbar.scss';

function Searchbar() {
  return (
    <div className='searchbar-container'>
      <img src={searchIcon} alt="" className="searchbar-icon"/>
      <input type="text" placeholder="Search" className="searchbar-input"/>
    </div>
  )
}

export default Searchbar