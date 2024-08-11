import "./App.css";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  return (
    <>
      <div className="page">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;