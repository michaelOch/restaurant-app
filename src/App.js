import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/index/index';

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
            </Routes>
        </Router>
    );
}

export default App;
