import React from 'react'
import { 
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Movies from '../movie/Movies'

let Error404 = () => {
    return (
      <>
        <Link to="/movie/">Regresar al inicio</Link>
        <h1>Esta página no existe - 404</h1>
      </>
    );
  }

function AppRoutes() {
    return (
        <Routes>
            <Route path="/movie">
                <Route path="/" element={<Movies />} />
                <Route path="/search" element={<Movies />} />
            </Route>
            <Route path="*" element={<Error404 />}> </Route>
        </Routes>
    )
}

export default AppRoutes