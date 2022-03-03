import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header";



function Listmovie() {
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

    async function deleteMovie(_id){
        if(window.confirm("Do you want to delete the movie?")){
            const location="localhost";
            const data={
                "_id":_id
            }

            const token = sessionStorage.getItem('token');
            const settings={
                method: 'DELETE',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
            };

            try {
            //user list
            const fetchResponse = await fetch(`http://${location}:3000/movies/delete/`, settings);
            const data = await fetchResponse.json();
            listmovies();
            return data;
            }
            catch (e) {
                return e;
            }

        }
    }

    async function editMovie(_id){
        if(window.confirm("Do you want to edit the movie?")){
            const location="localhost";
            const data={
                "_id":_id,
            }

            const token = sessionStorage.getItem('token');
            const settings={
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                body: JSON.stringify(data)
            },
            
            };

            try {
            //user list
            const fetchResponse = await fetch(`http://${location}:3000/movies/specificMovie/`, settings);
            const data2 = await fetchResponse.json();
            console.log(data2);
            listmovies();
            return data;
            }
            catch (e) {
                return e;
            }

        }
    }
    
    

  return (
    <div className="listmovies">
      <div className="container">
        <title>List Movies</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container">

            <Header/>

             <div className= " col-md-10 m-5 p-5 mx-auto">
                <table className="table table-bordered table-responsive" id="ulist" >

                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-center">Movie Name</th>
                            <th scope="col" className="text-center">Description</th>
                            <th scope="col" className="text-center">Runtime(Hr)</th> 
                            <th scope="col" className="text-center">Edit</th> 
                            <th scope="col" className="text-center">Delete</th>                 
                        </tr>
                    </thead>

                    <tbody className= "m-3 p-5" id="userData">
                        {lmovies.map(listMovie => {
                            return(
                            <tr key={listMovie._id}>
                                <td className="text-center">{listMovie.movie_name}</td>
                                <td className="text-center">{listMovie.description}</td>
                                <td className="text-center">{listMovie.runtime}</td>
                                <td className="text-center"><button onClick={()=>editMovie(listMovie._id)}>Edit</button></td>
                                <td className="text-center"><button onClick={()=>deleteMovie(listMovie._id)}>Delete</button></td>
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

export default Listmovie;