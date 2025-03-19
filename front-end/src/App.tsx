import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


// const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))

const Navbar = lazy(() => import('./components/navbar'))
// const Footer = lazy(() => import('./components/footer'))

const Home = lazy(() => import('./pages/home'))
const Register = lazy(() => import('./pages/register'))
const Login = lazy(() => import('./pages/login'))
const Products = lazy(() => import('./pages/products'))
const AdminPage = lazy(() => import('./pages/adminPage'))
const Cart = lazy(() => import('./pages/cart'))

export default function App() {
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />

            {/*Login and Register*/}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            
            {/*Pages*/}
            <Route path="admin_profile" element={<AdminPage />}/>
            <Route path='products' element={<Products />} />
            <Route path="cart" element={
                <Cart />
            } />
        </Routes>
        {/* <Footer /> */}
    </ Router>
    )
}