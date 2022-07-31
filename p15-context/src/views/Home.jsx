import ColorBox from "@c/ColorBox.jsx";
import color from "@/contexts/color.jsx";

const Home = () => {
  return (
    <color.Provider value={{ color: 'emerald' }}>
      <div className="home-wrap">
        <section className="hero min-h-screen">
          <ColorBox></ColorBox>
        </section>
      </div>
    </color.Provider>
  );
}

export default Home;