import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {
  

  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/products`);
      setData(res.data);
    };
    getData();
  }, []);
 
  
  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title} </h1>
        </div>
      ) : (
        <h1> Loading .. </h1>
      )}
    </div>
  );
};

export default Product;
