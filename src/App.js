import "./App.css";
import Functional from "./components/Functional/Functional";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <div className="whiteBG">
        <Navigation />
        <Header />
      </div>
      <div className="grayBG">
        <Functional />
      </div>
    </>
  );
}

export default App;
