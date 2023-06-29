import data from '../api/foodData.json';
export default function Highlights(){

    return(
        <section className="food-items">
            <div className="container mx-auto">
                <div className="week-spl">
                    <div className="d-flex justify-between">
                        <h2>This Weeks Specials!</h2>
                        <a className="btn-lemon" href="/Menu">Menu</a>
                    </div>
                </div>
                <div className="d-flex justify-between align-stretch">
                  {
                    data && data.length>0 && data.map((item)=>{
                      return(
                      <div className="food-card" key={item.key}>
                        <div className="food-img">
                          <img src={item.pic} alt={item.name}/>
                        </div>
                        <div className="food-content">
                          <div className="d-flex justify-between">
                            <h3>{item.name}</h3>
                            <span>{item.price}</span>
                          </div>
                          <p>{item.description}</p>
                          <a href="#">Order a delivery</a>
                        </div>
                      </div>
                      )
                    })
                    }
                </div>
            </div>
        </section>
   );
}