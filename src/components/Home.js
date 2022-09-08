

import About from './About';

import Info from './Info';
import Navbar from './Navbar'
import Project from './Project';
import PT from './PT';
import Footer from './Footer'


export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Info/>
    </div>
    <div>
    <About/>
    </div>
    <div>
      <PT/>
    </div>
    <div>
      <Project/>
    </div>
    <div>
      <Footer/>
    </div>
    
    </>
  );
}


