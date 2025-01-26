import { Route, Routes } from 'react-router-dom'


import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import { Toaster } from 'react-hot-toast';
import LoginPage from './components/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import ShortenUrlPage from "./components/ShortenUrlPage";
const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Toaster positoion="top-center" />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AppRouter;

export const SubDomainRouter = () => {
    return(
    <Routes>
        <Route path="/:url" element={<ShortenUrlPage />} />
    </Routes>
    )
}