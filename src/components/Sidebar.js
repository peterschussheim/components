import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Flex from './Flex'
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: '/profile',
    main: () => <h2>Profile</h2>
  }
]

const Sidebar = () => (
  <Router>
    <Flex style={{ display: 'flex' }}>
      <div
        style={{
          padding: '10px',
          width: '20%',
          background: '#f0f0f0'
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <Flex style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Flex>
    </Flex>
  </Router>
)

export default Sidebar
