import Section from "@/features/global/components/Section";
import Header from "../components/Header";
import PopulerBooks from "../container/PopulerBooks";
import Footer from "../components/Footer";

const Home = () => {
  // how to call api?
  // const { data: products } = useProduct();
  // console.log(products);
  return (
    <>
      <Header />
      <Section>
        <PopulerBooks />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
