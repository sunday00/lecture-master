import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import store from './modules';
import { tempSetUser, check } from './modules/users';
import * as LocalStorage from './lib/auth/LocalStorage';
import { Helmet, HelmetProvider } from 'react-helmet-async';

LocalStorage.get('user', (user) => {
  store.dispatch(tempSetUser(user));
  store.dispatch(check());
});

function App() {
  return (
    <article className="App">
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <Helmet>
              <title>REACTERS</title>{' '}
            </Helmet>
            <Route
              component={PostListPage}
              path={['/@:username', '/']}
              exact
            ></Route>
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={WritePage} path="/write" />
            <Route component={PostPage} path="/@:username/:postId" />
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
    </article>
  );
}

export default App;
