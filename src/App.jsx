import "./App.css";
import Linechart from "./components/LineChart/Linechart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <Linechart></Linechart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
