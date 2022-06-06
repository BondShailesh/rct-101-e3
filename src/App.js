import "./App.css";
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import { Navbar } from "./components/Navbar";
import Products from "./components/Products/Products";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import RequiredAuth from "./hoc/RequiredAuth";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
     <Routes>
     <Route path="/login" element={<Login/>}>Home</Route>

       <Route path="/" element={
         <RequiredAuth>
       <Home/>
       </RequiredAuth>
       }> 


       <Route path="/products" element={<Products/>}>
         <Route path="/products/:id" element={<Product/>}></Route>
         </Route>
       </Route>


     </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
