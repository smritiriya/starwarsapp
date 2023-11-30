import { Route, Routes } from 'react-router-dom';
import { Films, Home, HomeContainer, People, Planets, Species, Starships, Vehicles } from './containers';
import { URLRoutes } from './URLRoutes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeContainer />}>
        <Route index element={<Home />} />
        <Route path={URLRoutes.clients.films} element={<Films />}/>
        <Route path={URLRoutes.clients.peoples} element={<People />}/>
        <Route path={URLRoutes.clients.planets} element={<Planets />}/>
        <Route path={URLRoutes.clients.species} element={<Species />}/>
        <Route path={URLRoutes.clients.starships} element={<Starships />}/>
        <Route path={URLRoutes.clients.vehicles} element={<Vehicles />}/>
      </Route>
    </Routes>
  );
}

export default App;
