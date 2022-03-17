import React, { Suspense } from 'react'
import {
    Navigate,
  Route,
  Routes
} from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import routes from '../../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props) => {
  return (
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element/>}        
                  />
              )
            })}
            {/* <Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : '404'} /> */}
          </Routes>
        </Suspense>
  )
}

export default React.memo(TheContent)
