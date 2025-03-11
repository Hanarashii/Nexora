import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Navbar = lazy(() => import('./components/navbar'))
const Footer = lazy(() => import('./components/footer'))

const Home = lazy(() => import('./pages/home'))
const Register = lazy(() => import('./pages/register'))
const Login = lazy(() => import('./pages/login'))


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
        </Routes>
        <Footer />
    </ Router>
    )
}