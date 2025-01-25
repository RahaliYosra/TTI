import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../components/Cart";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/products");
      setData(res.data);
    };
    getData();
  }, []);
  return <Cart data={data} />;
};

export default Home;