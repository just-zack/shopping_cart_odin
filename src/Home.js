import Navbar from "./modules/navigation";
import Hero from "./modules/Hero";
import Second from "./modules/Second";
import ShopSnip from "./modules/Shop_snip";
import Footer from "./modules/footer";
import Contact from "./modules/Contact";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Second />
      <ShopSnip />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
