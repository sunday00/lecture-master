import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrap">
      <section className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Home Page</h1>
            <p className="mb-5">Home~ sweet home</p>
            <Link className="btn btn-primary" to={'/about'}>소개 보기</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
