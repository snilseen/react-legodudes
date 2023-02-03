import "./App.css";
import Product from "./components/Product";
import "./css/main.css";
import Layout from "./components/LayoutGrid";

function App() {
  const funker = "hvordan går det?";
  return (
    <div className="App">
      <Layout />
      <Product />
    </div>
  );
}

export default App;
