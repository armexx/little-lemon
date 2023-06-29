import { useState } from "react";
import './form.css';
import reserveTable from "../../assets/reserve-table.webp";
export default function Tablebookingform(){
    
    const [bookingData, setBookingData] = useState({
        bookingDate:"",
        bookingTime:"",
        noOfPerson:"",
        ocasion:"",
        cname:"",
        cphone:"",
        cemail:"",
        spreq:"",
    });

    const [modalOnOff, setmodalOnOff] = useState(false);
    const controllInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setBookingData({...bookingData,[name]:value});
    }
    const [saveData, setSaveData] = useState([]);
    const [disable, setDisable] = useState('getinput');
    const frmSubmit = (e) =>{
        e.preventDefault();
        setDisable("submited");
        const newData = { ...bookingData, id:new Date().getTime().toString()};
        setSaveData([...saveData,newData]);
        setBookingData({
        bookingDate:"",
        bookingTime:"",
        noOfPerson:"",
        ocasion:"",
        cname:"",
        cphone:"",
        cemail:"",
        spreq:""
    });
    setmodalOnOff(!modalOnOff);
    }
    return(
        <>
            <section className="reservation">
                <div className="container mx-auto">
                    <div className="d-flex negmr">
                        <div className="bookingTablecolm">
                            <div className="bookingForm">
                                <form action="" onSubmit={frmSubmit}>
                                    <div className="d-flex">
                                        <div className="form-controll half-col">
                                            <label htmlFor="bookingDate">Date</label>
                                            <div className="book-date">
                                                <input type="date" id="bookingDate" name="bookingDate" value={bookingData.bookingDate} onChange={controllInput} required/>
                                            </div>
                                        </div>
                                        <div className="form-controll half-col">
                                            <label htmlFor="bookingTime">Time</label>
                                            <div className="book-time">
                                                <select id="bookingTime" name="bookingTime" value={bookingData.bookingTime} onChange={controllInput} required>
                                                    <option value="5.00pm">5.00pm</option>
                                                    <option value="6.00pm">6.00pm</option>
                                                    <option value="7.00pm">7.00pm</option>
                                                    <option value="8.00pm">8.00pm</option>
                                                    <option value="9.00pm">9.00pm</option>
                                                    <option value="10.00pm">10.00pm</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-controll half-col">
                                            <label htmlFor="noOfperson">Number of Person</label>
                                            <div className="persons">
                                                <select id="noOfperson" name="noOfPerson" value={bookingData.noOfPerson} onChange={controllInput} required>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-controll half-col">
                                            <label htmlFor="occasion">Occasion</label>
                                            <div className="occasion">
                                                <select id="occasion" name="ocasion" value={bookingData.ocasion} onChange={controllInput} required>
                                                    <option value="Birthday">Birthday</option>
                                                    <option value="Engagement">Engagement</option>
                                                    <option value="Anniversary">Anniversary</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-controll half-col">
                                            <label htmlFor="cname">Name</label>
                                            <input type="text" id="cname" name="cname" value={bookingData.cname} onChange={controllInput} required/>
                                        </div>
                                        <div className="form-controll half-col">
                                            <label htmlFor="cphone">Phone</label>
                                            <input type="text" id="cphone" name="cphone" value={bookingData.cphone} onChange={controllInput} required />
                                        </div>
                                    </div>
                                    <div className="form-controll">
                                        <label htmlFor="cemail">Email</label>
                                        <input type="email" id="cemail" name="cemail" value={bookingData.cemail} onChange={controllInput} required />
                                    </div>
                                    <div className="form-controll">
                                        <label htmlFor="spreq">Special Request (Optional)</label>
                                        <textarea id="spreq" name="spreq" value={bookingData.spreq} onChange={controllInput}></textarea>
                                    </div>
                                    <div className="form-controll text-end">
                                        <button className="btn-lemon" type="submit" name="submit"
                                        disabled={bookingData.bookingDate.length===0 ||
                                            bookingData.bookingTime.length===0 ||
                                            bookingData.noOfPerson.length===0 ||
                                            bookingData.ocasion.length===0 ||
                                            bookingData.cname.length===0 ||
                                            bookingData.cphone.length===0 ||
                                            bookingData.cemail.length===0 ||
                                            disable==="submited"
                                        }
                                        >Reserve a Table</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="bookingTablecolm">
                            <img src={reserveTable} alt="reserve-table"/>
                        </div>
                    </div>
                    <div className={modalOnOff ? "modalOn" : "modalOff"}>
                        <div className="reserved-confirmed">
                            <h3>Reservation Confirmed</h3>
                            {
                            saveData.map((cElem)=>{
                                return(
                                <div className="showdata">
                                    <div className="d-flex">
                                        <div className="half-col pb-3">
                                            <div className="rsv-ocasion">
                                            <span>{cElem.ocasion}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="half-col pb-3">
                                            <div className="rsv-name">
                                            <span>{cElem.cname}</span>
                                            </div>
                                        </div>
                                        <div className="half-col pb-3">
                                            <div className="rsv-person">
                                            <span>{cElem.noOfPerson}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="half-col pb-3">
                                            <div className="rsv-date">
                                            <span>{cElem.bookingDate}</span>
                                            </div>
                                        </div>
                                        <div className="half-col pb-3">
                                            <div className="rsv-time">
                                            <span>{cElem.bookingTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="half-col pb-3">
                                            <div className="rsv-phone">
                                            <span>{cElem.cphone}</span>
                                            </div>
                                        </div>
                                        <div className="half-col pb-3">
                                            <div className="rsv-msg">
                                            <span>{cElem.spreq}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Thanks for choosing us. We look forward to welcoming you on your selected date and time.
                                        <div className="text-end"><button type="button" onClick={()=>setmodalOnOff(!modalOnOff)} className="btn-lemon">ok</button></div>
                                    </div>
                                </div>

                                );
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}