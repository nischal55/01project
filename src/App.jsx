import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Crousel from "./Components/Crousel";


function App() {

  return (
    <>
      <Header />
      <Crousel/>
      <br />
      {/* Product Show */}
      <h1 className="text-center"  style={{ color: "#40826D" }}>Our Products</h1><br/>
      <div className="container d-flex flex-wrap justify-content-around">
      <Card/>

     

      </div>
    </>
  );
}

export default App;
