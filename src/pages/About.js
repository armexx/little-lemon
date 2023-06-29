import Header from "../components/header/Header";
import AboutUs from "../components/about/AboutUs";
import Highlights from "../components/Highlights";
import Footer from "../components/footer/Footer";
export default function Home(){
    return (
        <>
            <Header/>
            <section className="intro"><AboutUs/></section>
            <Highlights />
            <Footer />
        </>
     );
    }