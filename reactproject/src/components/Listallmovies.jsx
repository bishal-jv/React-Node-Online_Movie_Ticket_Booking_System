import React from "react";
import {useState, useEffect} from "react";


function Listallmovie() {
    const [lmovies, setMovies] = useState([])

    useEffect(() => {
        listmovies();
    }, []);

    async function listmovies(){
        
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
            const fetchResponse = await fetch(`http://${location}:3000/movies/listallmovie/`, settings);
            const data = await fetchResponse.json();
            setMovies(data.listMovie);
        }
        catch (e) {
            return e;
        }

    }
    

  return (
    <div className="listallmovies">
      <div className="container">
        <title>List Of All Movies</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container">

             <div className= " col-md-10 m-5 p-5 mx-auto">
                <table className="table table-bordered table-responsive" id="ulist" >

                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-center"> Ongoing Movies </th>                
                        </tr>
                    </thead>

                    <tbody className= "m-3 p-5" id="userData">
                        {lmovies.map(listMovie => {
                            return(
                            <tr key={listMovie._id}>
                                <td className="text-center">{listMovie.movie_name}</td>
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

export default Listallmovie;