import "./App.css";
import ProductList from "./components/ProductList";
import { DarModeButton } from "./components/DarkModeButton";

function App() {
  return (
    <>
      <DarModeButton />
      <ProductList></ProductList>
    </>
  );
}

export default App;
