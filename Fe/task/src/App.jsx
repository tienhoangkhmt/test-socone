import { Suspense } from 'react'
import ROUTES_CONFIG from './routes/route.config'
import { Route, BrowserRouter, Routes} from "react-router-dom";
import WrapperRoutes from './routes/route';

function App() {
  console.log("ROUTES_CONFIG", ROUTES_CONFIG);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          ROUTES_CONFIG.map((item) => {
            return <Route exact  key={item.path} path={item.path} element={<WrapperRoutes {...item} />} />
          })
        }
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
