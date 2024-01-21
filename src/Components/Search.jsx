import Header from "./Header/Header";
import SearchCard from "./searchCard";
import { useParams } from "react-router-dom";
function Search() {
    let {search} = useParams();
    return (
        <>
            <Header />
      <div className="container d-flex flex-wrap justify-content-around" >
      <SearchCard searchData={search} />
      </div>
        </>
    );
}

export default Search;