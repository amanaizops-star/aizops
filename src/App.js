

// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Pricing from "./Pages/Pricing";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Buyplain from "./Component/Buyplain";
// import Customer from "./Component/Customer";
// import Buyplans from "./Component/Buyplans";
// import TrialAccountPage from './Component/TrialAccountPage';
// import PrivacyPolicy from "./Component/PrivacyPolicy";
// import TermsAndConditions from "./Component/TermsAndConditions";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Add smooth scrolling behavior
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth" // This adds smooth animation
//     });
//   }, [pathname]);

//   return null;
// }

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<About />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/Buyplain/:planName" element={<Buyplain />} />
//         <Route path="/Customer/" element={<Customer />} />
//         <Route path="/buy-plans" element={<Buyplans />} />
//         <Route path="/trial-account" element={<TrialAccountPage />} />
//         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
//         <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Pricing from "./Pages/Pricing";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Buyplain from "./Component/Buyplain";
// import Customer from "./Component/Customer";
// import Buyplans from "./Component/Buyplans";
// import TrialAccountPage from './Component/TrialAccountPage';
// import PrivacyPolicy from "./Component/PrivacyPolicy";
// import TermsAndConditions from "./Component/TermsAndConditions";

// // Dashboard Imports
// import DashboardLayout from "./Dashboard/Dashboardlayout";
// import DashboardHome from "./Dashboard/DashboardHome";
// import DashboardAnalytics from "./Dashboard/DashboardAnalytics";
// import DashboardUsers from "./Dashboard/DashboardUsers";
// import DashboardSettings from "./Dashboard/DashboardSettings";
// import DashboardOrders from "./Dashboard/DashboardOrders";
// import ProtectedRoute from "./Component/ProtectedRoute";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }, [pathname]);

//   return null;
// }

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<About />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/Buyplain/:planName" element={<Buyplain />} />
//         <Route path="/Customer/" element={<Customer />} />
//         <Route path="/buy-plans" element={<Buyplans />} />
//         <Route path="/trial-account" element={<TrialAccountPage />} />
//         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
//         <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        
//         {/* Dashboard Routes */}
//         <Route path="/dashboard" element={
//           <ProtectedRoute>
//             <DashboardLayout />
//           </ProtectedRoute>
//         }>
//           <Route index element={<DashboardHome />} />
//           <Route path="analytics" element={<DashboardAnalytics />} />
//           <Route path="users" element={<DashboardUsers />} />
//           <Route path="orders" element={<DashboardOrders />} />
//           <Route path="settings" element={<DashboardSettings />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Buyplain from "./Component/Buyplain";
import Customer from "./Component/Customer";
import Buyplans from "./Component/Buyplans";
import TrialAccountPage from './Component/TrialAccountPage';
import PrivacyPolicy from "./Component/PrivacyPolicy";
import TermsAndConditions from "./Component/TermsAndConditions";
import AuthModal from "./Component/AuthModal";
import { AuthProvider } from "./contex/AuthContext";

// Dashboard Imports
import DashboardLayout from "./Dashboard/Dashboardlayout";
import DashboardHome from "./Dashboard/DashboardHome";
import DashboardAnalytics from "./Dashboard/DashboardAnalytics";
import DashboardUsers from "./Dashboard/DashboardUsers";
import DashboardSettings from "./Dashboard/DashboardSettings";
import DashboardOrders from "./Dashboard/DashboardOrders";
import ProtectedRoute from "./Component/ProtectedRoute";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authForm, setAuthForm] = useState('login');

  const handleAuthSuccess = (success) => {
    if (success) {
      // Check if user is admin and redirect to dashboard
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.role === 'admin') {
        window.location.href = '/dashboard'; // or use navigate if you have access
      }
    }
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <Home 
            openAuthModal={(form) => {
              setAuthForm(form);
              setShowAuthModal(true);
            }} 
          />
        } />
        <Route path="/aboutus" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Buyplain/:planName" element={<Buyplain />} />
        <Route path="/Customer/" element={<Customer />} />
        <Route path="/buy-plans" element={<Buyplans />} />
        <Route path="/trial-account" element={<TrialAccountPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="users" element={<DashboardUsers />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={handleAuthSuccess}
        initialForm={authForm}
      />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;