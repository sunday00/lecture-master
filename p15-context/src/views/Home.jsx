import ColorBox from "@c/ColorBox.jsx";
import {ColorProvider} from "@/contexts/color.jsx";
import SelectColor from "@c/SelectColor.jsx";

const Home = () => {
  return (
    <ColorProvider>
      <div className="home-wrap">
        <section className="hero h-screen">
          <div className="flex-col">
            <SelectColor></SelectColor>
            <ColorBox></ColorBox>
          </div>
        </section>
      </div>
    </ColorProvider>
  );
}

export default Home;