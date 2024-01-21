import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchCard(searchData) {
  let searchCard = searchData;
  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/?price=${searchCard}`)
      .then((res) => {
        setSearchItem(res.data);
      });
  }, [searchData]);

  searchItem.map((searchList) => {
    const { id, title, price, images } = searchList;

    return (
      <>
        <Link style={{ textDecoration: "none" }} to={`/ProductDesc/${id}`}>
          <div
            className="card p-2 m-1"
            style={{ width: "10rem", height: "16rem" }}
          >
            <div
              className="imgPart "
              style={{ width: "100%", height: "10rem" }}
            >
              <center>
                <img src={images} alt="" height={150} width={130} />
              </center>
            </div>
            <div
              className="descPart m-auto p-1"
              style={{ color: "grey", height: "5rem" }}
            >
              {title}
            </div>
            <div className="pricePart m-auto p-1" style={{ color: "red" }}>
              Rs.{price}
            </div>
            <center></center>
          </div>
        </Link>
      </>
    );
  });
}

export default SearchCard;
