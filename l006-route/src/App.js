import './App.css';
import { Route, Link, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import HistoryComponent from './components/HistoryComponent';
import Info from './components/Info';
import PromiseExample from './components/PromiseExample';

function App() {
  const aboutRoutes = [
    { id: 1, href: '/about/company', text: 'company' },
    { id: 2, href: '/about/ceo', text: 'ceo' },
    { id: 3, href: '/about/vision', text: 'vision' },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/sunday00?color=dark">sunday00</Link>
            </li>
            <li>
              <Link to="/history">history</Link>
            </li>
            <li>
              <Link to="/info">info</Link>
            </li>
            <li>
              <Link to="/info/a/a">info/a/a</Link>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'gold' }} to="/info/a/a">
                info/a/a/a
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: 'gold' }} to="/promise">
                PromiseExample
              </NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Route exact path={['/', '/home', '/main']} component={Home} />
          <Route path="/about" render={() => <About routes={aboutRoutes} />} />
          <Route exact path="/user" component={User} />
          <Route path="/user/:username" component={User} />
          <Route path="/history" component={HistoryComponent} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/info/:id" component={Info} />
          <Switch>
            {/* cant understand :param */}
            <Route path="/history/a" component={HistoryComponent} />
            <Route path="/info/:id/:something" component={Info} />
            <Route path="/promise" component={PromiseExample} />
            <Route
              render={({ location }) => (
                <div>
                  <h2>not?</h2> <p>{location.pathname}</p>
                </div>
              )}
            />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
