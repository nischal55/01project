
import { useState } from "react";
function ProductApi() {
    const [products,setProduct]=useState([]);
  


$(document).ready(function(){
  $.get(
      'https://api.escuelajs.co/api/v1/products',
      function(data,res){
       
         setProduct(data);
         console.log(res);
         
      }
  )
  products.map((currProduct)=>{
        const {title,price}=currProduct;
  })
})

    return (
        <div>
            
        </div>
    );
}

export default ProductApi;