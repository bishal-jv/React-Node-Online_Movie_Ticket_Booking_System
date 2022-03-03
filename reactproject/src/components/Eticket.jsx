import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header";


function Eticket() {
    const [eticket, setEticket] = useState({})

    useEffect(() => {
        listeticket();
    }, []);

    async function listeticket(){
        
        const location = "localhost";
        const token = sessionStorage.getItem('token');
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };

        try {
            //user list
            const fetchResponse = await fetch(`http://${location}:3000/bookings/eticket/`, settings);
            const data = await fetchResponse.json();
            console.log(data.history);
            setEticket(data.history);
        }
        catch (e) {
            return e;
        }

    }
    

  return (
    <div className="listeticket">
      <div className="container">
        <title>E-Ticket</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container">
            <Header/>
             <div className= " col-md-10 m-5 p-5 mx-auto">
                <table className="table table-bordered table-responsive" id="eticket" >

                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-center">Booking ID</th>
                            <th scope="col" className="text-center">Email</th>
                            <th scope="col" className="text-center">Movie Name</th>   
                            <th scope="col" className="text-center">Date</th>
                            <th scope="col" className="text-center">Time</th>
                            <th scope="col" className="text-center">No of seats</th>            
                        </tr>
                    </thead>

                    <tbody className= "m-3 p-5" id="eticketData">
                        
                            <tr>
                                <td className="text-center">{eticket._id}</td>
                                <td className="text-center">{eticket.email}</td>
                                <td className="text-center">{eticket.movie_name}</td>
                                <td className="text-center">{eticket.date}</td>
                                <td className="text-center">{eticket.time}</td>
                                <td className="text-center">{eticket.no_of_seat}</td>
                            </tr>
                    </tbody>

                </table>
            </div>
 
        </div>

      </div>
    </div>
  );
  
}

export default Eticket;