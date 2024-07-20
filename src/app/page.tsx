import Image from "next/image";

import FormTopUp from "@/layouts/category/form";
import SidebarTopUp from "@/layouts/category/sidebar";

import Container from "@/components/container";

const Home = () => {
  return (
    <Container className="pt-24">
      <figure className="shadow-lg text-light blur-md min-h-300">
        <Image src="/mobile-legends.webp" alt="background image" fill priority objectFit="cover" objectPosition="center" />
      </figure>
      <div className="flex gap-8 my-10 flex-col md:flex-row">
        <SidebarTopUp />
        <FormTopUp />
      </div>
    </Container>
  );
};

export default Home;
