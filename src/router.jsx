import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import './App.css';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

const element = createRoutesFromElements(
    <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </>
);

const router = createBrowserRouter(element);

export default router;
