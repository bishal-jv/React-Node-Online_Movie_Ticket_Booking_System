import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header";


function Bookinghitory() {
    const [bhistory, setHistory] = useState([])

    useEffect(() => {
        listhistory();
    }, []);

    async function listhistory(){
        
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
            const fetchResponse = await fetch(`http://${location}:3000/bookings/history/`, settings);
            const data = await fetchResponse.json();
            setHistory(data.history);
        }
        catch (e) {
            return e;
        }

    }
    

  return (
    <div className="listallmovies">
      <div className="container">
        <title>List of All Movies</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container">
            <Header/>
             <div className= " col-md-10 m-5 p-5 mx-auto">
                <table className="table table-bordered table-responsive" id="movielist" >

                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-center">Email</th>
                            <th scope="col" className="text-center">Movie Name</th>   
                            <th scope="col" className="text-center">Date</th>
                            <th scope="col" className="text-center">Time</th>
                            <th scope="col" className="text-center">No of seats</th> 
                            <th scope="col" className="text-center">Booking time</th>            
                        </tr>
                    </thead>

                    <tbody className= "m-3 p-5" id="movieData">
                        {bhistory.map(history => {
                            return(
                            <tr key={history._id}>
                                <td className="text-center">{history.email}</td>
                                <td className="text-center">{history.movie_name}</td>
                                <td className="text-center">{history.date}</td>
                                <td className="text-center">{history.time}</td>
                                <td className="text-center">{history.no_of_seat}</td>
                                <td className="text-center">{history.created_at}</td>
                            </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
 
        </div>

      </div>
    </div>
  );
  
}

export default Bookinghitory;