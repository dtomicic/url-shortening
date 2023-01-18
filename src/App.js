import "./App.css";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Functional from "./components/Functional/Functional";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <div className="whiteBG">
        <Navigation />
        <Header />
      </div>
      <div className="grayBG">
        <Functional />
        <Statistics />
      </div>
      <div className={"boostLinks"}>
        <Boost />
      </div>
      <div className={"footer"}>
        <Footer />
      </div>
    </>
  );
}

export default App;
