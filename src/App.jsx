import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About'
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-black via-blue-700 to-pink-500 [background:radial-gradient(circle at 30% 30%, #ff69b4 0%, #1e3a8a 70%, #000000 100%)]"></div> */}
      <div class="absolute inset-0 -z-10 h-full w-full bg-gradient-to-l from-black via-blue-800 to-pink-400 [background:radial-gradient(circle at top left, #ff0099 0%, #00aaff 60%, #000000 100%)]"></div>
      


      
      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        {/* <About/> */}
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
