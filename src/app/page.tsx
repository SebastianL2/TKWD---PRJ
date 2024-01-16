// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Content from "./content";
import Comments from "./comments";

export default function Campaign() {
  return (
    <>
      <Navbar scrolling={false} />
      <Hero />
      <Content />
      <Comments />
      
      <Footer />
    </>
  );
}
