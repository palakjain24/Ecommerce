import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Banner from './components/Banner/Banner';
import Homepage from './components/Homepage/Homepage';

function App(props) {
  // useEffect(() => {
  //   let isLoggedIn = localStorage.getItem("token");
  //   if (!isLoggedIn?.length) {
  //     props?.history?.replace({
  //       pathname: "/login"
  //     });
  //   }
  // }, []);

  return (
    <>
      <div className='App'>
        <div>
          <Navbar />
          <Banner />
          <Homepage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
