import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import restaurant from "../assets/restaurant.jpg";
import Tablebookingform from "../components/form/Tablebookingform";
export default function Reservations(){
    return (
        <>
        <Header/>
        <section className="intro">
            <div className="container mx-auto">
                <div className="d-flex justify-between pos-relative">
                    <div className="intro-content">
                        <h1>Reservation<span>Book Your Table</span></h1>
                        <p>Please be on time for your reservation to guarantee your seating.</p>
                    </div>
                    <div className="intro-img">
                       <img src={restaurant} alt="restaurant" />
                    </div>
                </div>
            </div>
        </section>
        <Tablebookingform />
        <Footer />
        </>
     );
    }