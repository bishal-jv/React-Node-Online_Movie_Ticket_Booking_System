import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";



function Bookticket() {

    const location = "localhost";
    const [mname , setmname] = useState("");
    const [date , setdate] = useState("");
    const [time , settime] = useState("");
    const [no_of_seat , setno_of_seat] = useState("");
    const navigate = useNavigate();

    async function callbookticketAPI(e) {
        e.preventDefault();

        const data = {
            "movie_name": mname,
            "date": date,
            "time": time,
            "no_of_seat": no_of_seat,
        }
        const token = sessionStorage.getItem('token');
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        };

        try {
            //register api call
            const fetchResponse = await fetch(`http://${location}:3000/bookings/input/`, settings);
            const data = await fetchResponse.json();
            window.confirm(data.message);
            navigate("/eticket");
            return data;
        } 
        catch (e) {
            return e;
        }

    };


  return (
    <div className="booktickets">
      <div className="container">
        <title>Book tickets</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="../index.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container ">
            <Header/>
            <div className = "row col-md-7 mx-auto">
                <form className = "align-self-sm-center m-5 pb-5 needs-validation mx-auto border" onSubmit={callbookticketAPI}>
                    
                    <div className= "m-2 p-2">
                        <label className= "form-label" htmlFor="mname">Movie Name </label>
                        <input type="text" value={mname} onChange={e => setmname(e.target.value)} id="mname" className="form-control m-3 mx-auto" placeholder="Enter movie name" name="mname" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="date" >Date </label> 
                        <input type="date" value={date} onChange={e => setdate(e.target.value)} id="date" className="form-control m-3 mx-auto" placeholder="Enter date" name="date" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="time" >Time (24H) </label> 
                        <input type="text" value={time} onChange={e => settime(e.target.value)} id="time" className="form-control m-3 mx-auto" placeholder="Enter time" name="time" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="no_of_seat" >Number of seats</label> 
                        <input type="text" value={no_of_seat} onChange={e => setno_of_seat(e.target.value)} id="no_of_seat" className="form-control m-3 mx-auto" placeholder="Enter no of seats" name="no_of_seat" required/>
                    </div>

                    <div className= "row m-4 ">  
                        <button className="btn btn-primary" type="submit">Save</button> 
                        <a className="btn border" href="/home">Cancel</a>
                    </div>

                </form>   
            </div>
            
        </div>

      </div>
    </div>
  );
}

export default Bookticket;