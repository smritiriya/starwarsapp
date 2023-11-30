import { useMemo } from 'react';
import gridon from "../../assets/gridon.png";
import liston from "../../assets/liston.png";
import "./ToggleOption.scss"

function ToggleOption({toggle, setToggle}) {
  
  const image = useMemo(()=>{
    return toggle ? gridon : liston;
  },[toggle])

  const handleToggleOption = () => {
    setToggle(!toggle);
  }

  return (
    <div className='toggle-option-container' onClick={handleToggleOption}>
      <img src={image} alt="toggleimage" />
    </div>
  )
}

export default ToggleOption