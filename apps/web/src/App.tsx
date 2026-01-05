import Nav from "./page/Nav";
import Hero from "./page/Hero";
import HowItWorks from "./page/HowItWorks";
import Features from "./page/Features";
import Pricing from "./page/Pricing";

function App() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
