import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/index/index';
import Shop from './pages/shop/shop';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/index/index';
import Category from './pages/dashboard/category/category';
import SubCategory from './pages/dashboard/subCategory/subCategory';
import Product from './pages/dashboard/product/product';
import Layout from './components/layout/layout';
import DashLayout from './components/dashLayout/dashLayout';
import User from './pages/dashboard/user/user';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>

                    <Route index element={<Home />}/>
                    <Route path='shop' element={<Shop />}/>
                    <Route path='register' element={<Register />}/>
                    <Route path='login' element={<Login />}/>

                    <Route path='dashboard' element={<DashLayout />}>
                        
                        <Route index element={<Dashboard />}/>
                        <Route path='category' element={<Category />}/>
                        <Route path='subcategory' element={<SubCategory />}/>
                        <Route path='product' element={<Product />}/>
                        <Route path='users' element={<User />}/>
                    </Route>{/* END dashboard */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
