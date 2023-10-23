import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";



function App() {

  return (
    <>
      <Header />
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-3 px-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://gleam.io/cdn-cgi/image/format=auto,metadata=none,fit=scale-down,quality=85/https://gleam.directus.app/assets/9815df92-b090-4427-a123-408a2909470d" className="d-block w-100 h-40" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.shutterstock.com/image-vector/internet-shopping-set-customers-buying-260nw-1643133313.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz6yw2tTrvbFgtgo_1eqFi1H8nWwKUPJdQA&usqp=CAU" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
