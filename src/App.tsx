import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import CreateProductPage from "./pages/CreateProductPage"
import FormPage from "./pages/FormPage"
import LoginPage from "./pages/LoginPage"
import NewInPage from "./pages/NewInPage"
import PrincipalPage from "./pages/PrincipalPage"
import ProductPage from "./pages/ProductPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path='/UTN-Frontend-Final/' element={<PrincipalPage />} />
      <Route path='/UTN-Frontend-Final/producto/:id' element={<ProductPage />} />
      <Route path='/UTN-Frontend-Final/cart' element={<CartPage />} />
      <Route path='/UTN-Frontend-Final/form' element={<FormPage />} />
      <Route path='/UTN-Frontend-Final/login' element={<LoginPage />} />
      <Route path='/UTN-Frontend-Final/checkout' element={<CheckoutPage />}/>
      <Route path='/UTN-Frontend-Final/newIn' element={<NewInPage />}/>
      <Route path='/UTN-Frontend-Final/profile' element={<ProfilePage />}/>
      <Route path='/UTN-Frontend-Final/register' element={<RegisterPage />}/>
      <Route path='/UTN-Frontend-Final/create-product' element={<CreateProductPage />}/>
    </Routes>
  )
}

export default App
