import Annoucement from "../components/Annoucment/Annoucement";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Annoucement />
      <Slider />
    </div>
  );
};

export default Home;
