import { Route, Link } from 'react-router-dom';
import { About } from './About';
import { Admin } from './Admin';
import { Home } from './Home';

export function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/admin">Admin</Link>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>
    </>
  );
}
