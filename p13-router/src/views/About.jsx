import {Link, useLocation} from "react-router-dom";
import qs from 'qs';

const About = () => {
  // https://velog.io/@nemo/useLocation
  const location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const showDetail = query.detail === 'true'

  return (
    <div className="about-wrap">
      <section className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About</h1>
            <p className="mb-5">
              나는 나는 저팔계. 왜 나를 싫어하나.
            </p>
            { showDetail && <p>query.detail = { query.detail }</p>}
            <Link className="btn btn-primary" to={'/'}>알았어</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;