import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes} from "react-router-dom";
import ROUTES_CONFIG from './routes/route.config';
import WrapperRoutes from './routes/route';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
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
