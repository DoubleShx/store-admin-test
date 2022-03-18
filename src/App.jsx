import "./App.css";
import Layout from "./components/layout/layout";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import TheContent from "./components/TheContent";

function App() {
  const cookie = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.get("access_token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="App">
      <TheContent />
      <Layout />
    </div>
  );
}

export default App;
