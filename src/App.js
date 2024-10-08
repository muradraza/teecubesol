import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "./Pages/Testimonials";
import Showcase from "./Pages/Showcase";
import Contact from "./Pages/Contact";
import Shopify from "./Pages/Shopify";
import Seo from "./Pages/Seo";
import Websitedevelopment from "./Pages/Websitedevelopment";
import Smm from "./Pages/Smm";
import Mobileapp from "./Pages/Mobileapp";
import Mobileappdevelopment from "./Pages/Mobileappdevelopment";
import Post1 from "./Pages/Blogs/Post1";
import Blog from "./Pages/Blog";
import Landing from "./Pages/Landing";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/websitedevelopment" element={<Websitedevelopment />} />
        <Route path="/smm" element={<Smm />} />
        <Route path="/mobile-app" element={<Mobileapp />} />
        <Route
          path="/mobileappdevelopment"
          element={<Mobileappdevelopment />}
        />
        <Route
          path="/blogs/cost-to-build-a-custom-mobile-app"
          element={<Post1 />}
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/custom-web-development" element={<Landing />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </>
  );
}

export default App;
