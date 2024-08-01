import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import './App.css';

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
