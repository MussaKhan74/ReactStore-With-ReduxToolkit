import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import store from "./store/store";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
