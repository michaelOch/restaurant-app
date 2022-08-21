import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/index/index';
import Shop from './pages/shop/shop';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/index/index';
import Category from './pages/dashboard/category/category';
import SubCategory from './pages/dashboard/subCategory/subCategory';

function App() {
    return (
        <Router>
            <Routes>
                {/** Protected Routes */}
                {/* <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth />}>
                        <Route path='/' element={<Home />} />
                    </Route>
                    <Route element={<RequireAuth />}>
                        <Route path='/home' element={<Home />} />
                    </Route>
                    <Route element={<RequireAuth />}>
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                </Route> */}
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/shop'
                    element={<Shop />}
                />
                <Route
                    path='/register'
                    element={<Register />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/dashboard'
                    element={<Dashboard />}
                />
                <Route
                    path='/dashboard/category'
                    element={<Category />}
                />
                <Route
                    path='/dashboard/subcategory'
                    element={<SubCategory />}
                />
            </Routes>
        </Router>
    );
}

export default App;
