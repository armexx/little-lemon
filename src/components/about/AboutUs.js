import aboutUs from "../../assets/Mario-and-Adrian.webp";
export default function AboutUs(){
    return (
    <div className="container mx-auto">
        <div className="d-flex justify-between pos-relative">
            <div className="intro-content">
                <h1>Little Lemon <span>Chicago</span></h1>
                <p>Based on Chicago, illinois, Little Lemon is a family-owned Mediterranean restaurant. Focused on traditional recipes served with a modern twist. The chefs draw inspiration from italian, Greek and Turkish culture and have a menu of 12-15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
            </div>
            <div className="intro-img">
            <img src={aboutUs} alt="Mario-and-Adrian" />
            </div>
        </div>
    </div>
)
}