import Header from "./components/Header";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
      <div className="bg-[#0b1d2a] text-white min-h-screen">
        <Header />
        <Hero />
        <Events />
        <Footer />
      </div>
  );
};

export default App;