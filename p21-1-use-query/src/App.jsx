import { NavLink, Routes, Route } from 'react-router-dom';
import Home from '@v/Home.jsx';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import Users from '@v/Users.jsx';
import Nav from '@c/Nav.jsx';
import Planets from '@v/Planets';
import People from '@v/People';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className="App" data-theme="dracula">
          <Nav />
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/planets" element={<Planets />}></Route>
              <Route path="/people" element={<People />}></Route>
            </Routes>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
