import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./app/features/productSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [fetchProducts]);

  const Men = lazy(() => import("./pages/Men"));
  const Women = lazy(() => import("./pages/Women"));
  const Electronics = lazy(() => import("./pages/Electronics"));
  const Jewelery = lazy(() => import("./pages/Jewelery"));
  const Cart = lazy(() => import("./components/Cart"));
  const Test = lazy(() => import("./pages/Test"));
  const SignUp = lazy(() => import("./authentication/SignUp"));
  const Login = lazy(() => import("./authentication/Login"));

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />}></Route>
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />}></Route>
        <Route path="/Jewelery" element={<Jewelery />}></Route>
        <Route path="/Electronics" element={<Electronics />}></Route>
        <Route path="/Test" element={<Test />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
