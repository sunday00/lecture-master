import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import store from './modules';

function App() {
  return (
    <article className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route
            component={PostListPage}
            path={['/@:username', '/']}
            exact
          ></Route>
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={PostPage} path="/@:username/:postId" />
        </BrowserRouter>
      </Provider>
    </article>
  );
}

export default App;
