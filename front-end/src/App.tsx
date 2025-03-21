import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const AdminLayout = lazy(() => import('./layouts/AdminLayout'))
const CustomerLayout = lazy(() => import('./layouts/CustomerLayout'))


const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))

const Home = lazy(() => import('./pages/home'))
const Register = lazy(() => import('./pages/register'))
const Login = lazy(() => import('./pages/login'))
const Products = lazy(() => import('./pages/products'))
const AdminDashboard = lazy(() => import('./adminPages/adminDashboard'))
const Cart = lazy(() => import('./pages/cart'))

export default function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CustomerLayout />} >
                <Route index element={<Home />} />
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
            </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </ Router>
    )
}