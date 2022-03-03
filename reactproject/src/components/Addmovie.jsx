import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";



function Addmovie() {

    const location = "localhost";
    const [mname , setmname] = useState("");
    const [description , setdescription] = useState("");
    const [runtime , setruntime] = useState("");
    const navigate = useNavigate();

    async function calladdmovieAPI(e) {
        e.preventDefault();

        const data = {
            "movie_name": mname,
            "description": description,
            "runtime": runtime,
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
            const fetchResponse = await fetch(`http://${location}:3000/movies/add/`, settings);
            const data = await fetchResponse.json();
            window.confirm(data.message);
            navigate("/home");
            return data;
        } 
        catch (e) {
            return e;
        }

    };


  return (
    <div className="addmovie">
      <div className="container">
        <title>Add movie</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="../index.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container ">
            <Header/>
            <div className = "row col-md-7 mx-auto">
                <form className = "align-self-sm-center m-5 pb-5 needs-validation mx-auto border" onSubmit={calladdmovieAPI}>
                    
                    <div className= "m-2 p-2">
                        <label className= "form-label" htmlFor="mname">Movie Name </label>
                        <input type="text" value={mname} onChange={e => setmname(e.target.value)} id="mname" className="form-control m-3 mx-auto" placeholder="Enter movie name" name="mname" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="description" >Description </label> 
                        <input type="text" value={description} onChange={e => setdescription(e.target.value)} id="description" className="form-control m-3 mx-auto" placeholder="Enter description" name="description" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="runtime" >Runtime</label> 
                        <input type="text" value={runtime} onChange={e => setruntime(e.target.value)} id="runtime" className="form-control m-3 mx-auto" placeholder="Enter runtime" name="runtime" required/>
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

export default Addmovie;