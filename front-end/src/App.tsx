import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import RootState from "./type/rootstate";
import { useSelector } from "react-redux";


// const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))

const Navbar = lazy(() => import('./components/navbar'))
// const Footer = lazy(() => import('./components/footer'))

const Home = lazy(() => import('./pages/home'))
const Register = lazy(() => import('./pages/register'))
const Login = lazy(() => import('./pages/login'))
const Products = lazy(() => import('./pages/products'))
const AdminDashboard = lazy(() => import('./adminPages/adminDashboard'))
const Cart = lazy(() => import('./pages/cart'))

export default function App() {

    const user = useSelector((state : RootState) => state.user.role)
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='home' element={<Home />} />

                {/*Login and Register*/}
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                
                {/*Pages*/}
                <Route path='products' element={<Products />} />
                <Route path="cart" element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                } />
            </Routes>
            {/* <Footer /> */}
        </ Router>
    )
}