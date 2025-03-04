import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Navbar = lazy(() => import('./components/navbar'))

const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Products = lazy(() => import('./pages/products'))
const Register = lazy(() => import('./pages/register'))

export default function App() {
    return (
    <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="login" element={<Login />} />
                <Route path='products' element={<Products />} />
                <Route path='register' element={<Register />}></Route>
            </Routes>
    </ Router>
    )
}