const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div className="home-wrap">
      <section className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-2">{number}</h1>
            <p className="flex gap-2">
              <button className="btn" onClick={onIncrease}>+1</button>
              <button className="btn" onClick={onDecrease}>-1</button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter;