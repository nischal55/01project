import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Category(props) {
  const [filtered_products, setFilteredProducts] = useState([]);
  var category_name = props.category;
  let category_id;
  switch (category_name) {
    case "clothes": {
      category_id = 1;
      break;
    }
    case "Electronics": {
      category_id = 2;
      break;
    }
    case "Furniture": {
      category_id = 3;
      break;
    }
  }
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${category_id}/products`)
      .then((res) => {
        setFilteredProducts(res.data);
      });
    console.log(filtered_products);
  }, [category_name]);
  return filtered_products.map((filterItems) => {
    const { id, title, price, images } = filterItems;
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

export default Category;
