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
  const {username} = useParams();
  const profile = data[username];

  return (
    <div className="profile-wrap">
      <section className="hero min-h-screen">
        <div className="hero-content text-center text-neutral-content flex-col">
          <div>
            <nav className="flex mb-4 p-4 gap-2 justify-center">
              <Link className="btn btn-warning" to={'/profiles/apple'}>사과</Link>
              <Link className="btn btn-warning" to={'/profiles/banana'}>바나나</Link>
            </nav>
          </div>
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Profile</h1>
            {profile ? (<>
                <h2 className="mb-4 text-3xl font-bold">{profile.name}</h2>
                <p className="mb-5">
                  {profile.description}
                </p>
            </>) : (<><h2 className="text-3xl">404!</h2><p>No data</p></>)}
            <Link className="btn btn-primary" to={'/'}>Oh!</Link>
          </div>
        </div>
      </section>
    </div>
  );
}