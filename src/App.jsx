import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Logobar from "./components/Logobar";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Letstalk from "./components/Letstalk";
import Productimg from "./components/Productimg";
import Footer from "./components/Footer";
import Copyright from "./components/copyright";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Logobar />
      <Productimg />
      <Feature />
      <Testimonial />
      <Letstalk />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
