import {Routes, Route, Link} from "react-router-dom";
import Profile from "@v/Profile";

export default () => {
  return (
    <div className="profile-wrap">

      <Routes>
        {/*<Route path={"/profile"} render={() => {}} exact></Route>*/}
        <Route path={":username"} element={<Profile />} />
      </Routes>

      <section className="hero min-h-screen">
        <div className="hero-content text-center text-neutral-content flex-col">
          <div>
            <nav className="flex mb-4 p-4 gap-2 justify-center">
              <Link className="btn btn-warning" to={'/profiles/apple'}>사과</Link>
              <Link className="btn btn-warning" to={'/profiles/banana'}>바나나</Link>
            </nav>
          </div>
            <div>No Fruit</div>
        </div>
      </section>
    </div>
  );
}