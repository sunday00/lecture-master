import {Link, useParams} from "react-router-dom";

const data = {
  apple: {
    name: 'apple',
    description: 'red fruit'
  },
  banana: {
    name: 'banana',
    description: 'yellow fruit'
  }
}

export default () => {
  const { username } = useParams();
  const profile = data[username];

  if(!profile) {
    return (<div>Not Exists</div>);
  }

  return (
    <div className="about-wrap">
      <section className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Profile</h1>
            <h2 className="mb-4 text-3xl font-bold">{ profile.name }</h2>
            <p className="mb-5">
              { profile.description }
            </p>
            <Link className="btn btn-primary" to={'/'}>Oh!</Link>
          </div>
        </div>
      </section>
    </div>
  );
}