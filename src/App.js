import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
