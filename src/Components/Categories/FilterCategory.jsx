import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Search from "../../Category";

function FilterCategory() {
  var { category_name } = useParams();

  return(
   <>
  <Header/>
 <center><h2 style={{color:"grey",marginTop:"5%"}}>{category_name}</h2></center> <br />
  <div className="container d-flex flex-wrap justify-content-around" >
    
  <Search category={category_name}/>
  </div>
  </>
  );
}

export default FilterCategory;
