import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import axios from "axios";

function ProductDesc() {
    const [products,setProduct]=useState([]);
    var {id}=useParams();
    useEffect(()=>{
          axios.get('https://api.escuelajs.co/api/v1/products/'+id).then((res)=>setProduct(res.data))
        },[])
    return (
       
           <>
           <Header />
             <div className="container d-flex flex-wrap mt-4">
                <div className="card m-3">
                  <img src={products.images} alt="" height={450} width={350}/>
                </div>
                <div className="card p-4 m-3" style={{width:'22rem'}}>
                  <h2>{products.title}</h2>
                  
                  <h3 style={{color:'red'}}>Rs. {products.price}</h3>
                  <div className="container mt-3">
                  <button className="btn btn-primary col-5 m-2">Add to Cart</button>
                  <button className="btn btn-danger col-5 m-2">Buy Now</button>
                  </div>
                  <hr />
                  <div className="productDesc">
                  <h4 className="mt-1">Description</h4>
                  <p>
                    {products.description}
                  </p>
                  </div>
                </div>
                <div className="card p-4 m-3" style={{width:'19rem',height:'28.2rem'}}>
                  <div className="card p-2">
                  Delivery <br />
                    Bagmati, kathmandu Metro 22- Newroad Area, Newroad
                  </div>
                  <div className="card p-2 mt-1">
                    Free Delivery <br />
                    Bagmati, kathmandu Metro 22- Newroad Area, Newroad
                  </div>
                  <div className="card p-2 mt-1">
                    Cash on Delivery
                  </div>
                  <div className="card p-2 mt-1">
                    Service <br />
                    7 Days Return <br />
                    Warranty not Available
                  </div>
                  <div className="card p-2 mt-1">
                    Sold by <br />
                    Seller Name
                  </div>
                </div>
              </div>
            
          </>
         
    );
}


export default ProductDesc;