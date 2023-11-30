import { useEffect, useState } from 'react';
import { FilmCard, Loader, Searchbar, ToggleOption } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesSelector } from "../../store/selector";
import { setLoading } from '../../store/slice/movieSlice';
import menubutton from "../../assets/Menu.png";
import './Films.scss';

function Films() {

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector(getMoviesSelector);
  const { isLoading } = selector;
  const { results, } = selector.movieData;

  useEffect(() => {
    dispatch(setLoading())
    dispatch({ type: "FETCH_MOVIE_DATA" });
  }, [dispatch]);

  console.log(selector.movieData.results);

  const renderFilmsTable = (item, index) => {
    const { title } = item;
    return (
      <tr>
        <td>{title}</td>
        <td>Lorem</td>
        <td>Lorem</td>
        <td>
          <img src={menubutton} alt="" />
        </td>
      </tr>
    )
  }

  const renderFilmCard = (item, index) => {
    return (
      <FilmCard {...item} key={`renderfilmcard${index}`} />
    )
  }

  return (
    <div className='filmspage-container'>
      <div className='films-searchbar-container'>
        <div className="searchbar-box">
          <Searchbar />
        </div>
      </div>
      <div className='filmspage-moviesection'>
        <div className='filmspage-movietitle'>
          <h2>Films</h2>
          <ToggleOption toggle={toggle} setToggle={setToggle} />
        </div>
        <>
          {isLoading ?
            <Loader /> :
            <>
              {toggle ?
                <div className='filmspage-moviedata'>
                  {results?.map(renderFilmCard)}
                </div>
                :
                <div className="filmspage-moviestable">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Director</th>
                        <th>Release Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {results?.map(renderFilmsTable)}
                    </tbody>
                  </table>
                </div>
              }
            </>
          }
        </>
      </div>
    </div>
  )
}

export default Films