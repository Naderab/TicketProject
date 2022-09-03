import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <><Router>
     <Routes>
     <Route path="/aboutUs" element={<AboutUs />} />
     </Routes>
    </Router>
    <Footer />
    </>
    
  );
}
  
export default App;