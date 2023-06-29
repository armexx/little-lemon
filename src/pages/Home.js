import Header from "../components/header/Header";
import Highlights from "../components/Highlights";
import AboutUs from "../components/about/AboutUs";
import Footer from "../components/footer/Footer";
import restaurantDish from "../assets/restaurant-dish.png";
export default function Home(){
    return (
        <>
            <Header/>
            <section className="intro">
                <div className="container mx-auto">
                    <div className="d-flex justify-between pos-relative">
                        <div className="intro-content">
                            <h1>Little Lemon <span>Chicago</span></h1>
                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                            <a className="btn-lemon" href="/reservations">Reserve a Table</a>
                        </div>
                        <div className="intro-img">
                        <img src={restaurantDish} alt="restaurant-dish" />
                        </div>
                    </div>
                </div>
            </section>
            <Highlights />
            <section className="about"><AboutUs/></section>
            <Footer />
        </>
     );
    }