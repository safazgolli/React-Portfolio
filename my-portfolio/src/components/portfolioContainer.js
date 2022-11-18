import React, { useState } from 'react';
// import Header from './Header';
import Home from './pages/Home';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Navigation from './Navigation'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'aboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage=== 'resume'){
      return <Resume/>;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}