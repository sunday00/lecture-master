const Counter = ({number, increase, decrease}) => {

  return (
    <div className="home-wrap">
      <section className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{number}</h1>
            <button className="btn btn-primary mx-1" onClick={increase}>+</button>
            <button className="btn btn-primary mx-1" onClick={decrease}>-</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter;