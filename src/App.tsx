import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { getProducts } from "./services/api";
function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setData(await getProducts());
    };
    fetchApi();
  }, []);

  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Products products={data}/>
    </>
  );
}

export default App;
