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
import PrivateRoute from './PrivateRoute';
import ErrorPage from './components/ErrorPage';
const AppRouter = () => {
    const hideHeaderFooter = location.pathname.startsWith("/s");
    return (
        <>
        {!hideHeaderFooter && <Navbar /> }
        <Toaster positoion="top-center" />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/s/:url" element={<ShortenUrlPage />} />
                <Route path="/register" element={
                    <PrivateRoute publicPage={true}>
                        <RegisterPage />
                    </PrivateRoute>} />
                <Route path="/login" element={
                    <PrivateRoute publicPage={true}>
                        <LoginPage />
                    </PrivateRoute>} />
                <Route path="/dashboard" element={
                    <PrivateRoute publicPage={false}>
                        <Dashboard />
                    </PrivateRoute>} />
                    <Route path="/error" element={ <ErrorPage />} />
                    <Route path="*" element={ <ErrorPage message="We can't seem to find the page you're looking for"/>} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    );
}

export default AppRouter;

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:url" element={<ShortenUrlPage />} />
        </Routes>
    )
}