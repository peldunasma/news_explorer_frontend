
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import Footer from "../Footer/Footer";

function App() {
  // const [activeModal, setActiveModal] = useState("");

  // function handleCreatePopup() {
  //   setActiveModal("create");
  // }

  // function handleClosePopup() {
  //   setActiveModal("");
  // }

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;