import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect } from 'react';

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'

import HomePage from './landing_page/home/HomePage.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';

import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound.jsx';
import SignUp from './landing_page/signup/SignUp.jsx';
import Login from './landing_page/signup/Login.jsx';


// DashBoard
// import Home from '../components/Home.jsx';
import Summary from '../components/Summary.jsx';
import Orders from '../components/Orders.jsx';
import Positions from '../components/Positions.jsx';
import Holdings from '../components/Holdings.jsx';
import Funds from '../components/Funds.jsx';
import FrontendLayout from '../components/FrontendLayout.jsx';
import Dashboard from '../components/Dashboard.jsx';
import TopBar from '../components/TopBar.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

// const location = useLocation();
// const isHomeRoute = location.pathname === '/home';

const Routeshandler = () => {
  const location = useLocation();
  // const isHomeRoute = location.pathname === '/dashboard';
  const isDashboardRoute = location.pathname.startsWith('/dashboard')

  useEffect(() => {
  const dashboardCssId = 'dashboard-css';

  if (isDashboardRoute) {
    // ➕ Add dashboard.css if it's not already added
    if (!document.getElementById(dashboardCssId)) {
      const link = document.createElement('link');
      link.id = dashboardCssId;
      link.rel = 'stylesheet';
      link.href = '/dashboard.css'; // must be in public/
      document.head.appendChild(link);
    }
  } else {
    // 🧹 Remove dashboard.css when leaving /dashboard route
    const existingLink = document.getElementById(dashboardCssId);
    if (existingLink) {
      existingLink.remove();
    }
  }
}, [isDashboardRoute]);


  return isDashboardRoute ? (
    <>
     <TopBar />
      <Routes>
        <Route path='/dashboard' element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
        }>
          <Route index element={<Summary />} />
         <Route path="orders" element={<Orders />} />
         <Route path="holdings" element={<Holdings />} />
         <Route path="positions" element={<Positions />} />
         <Route path="funds" element={<Funds />} />
        </Route>
        {/* <Route path='/*' element={<Dashboard />}/> */}
      </Routes>
    </>
  ) : (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )

}

createRoot(document.getElementById('root')).render(
   <CookiesProvider>
      <BrowserRouter>
        <Routeshandler />
      </BrowserRouter>
    </CookiesProvider>
)
