import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header";



function Listuser() {
    const [lusers, setUsers] = useState([])

    useEffect(() => {
        listusers();
    }, []);

    async function listusers(){
        
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
            const fetchResponse = await fetch(`http://${location}:3000/users/list-users/`, settings);
            const data = await fetchResponse.json();
            setUsers(data.users);
        }
        catch (e) {
            return e;
        }

    }

    

  return (
    <div className="listusers">
      <div className="container">
        <title>List Users</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container">

            <Header/>

             <div className= " col-md-7 m-3 p-5 mx-auto">
                <table className="table table-bordered table-responsive" id="ulist" >

                    <thead className="thead-light">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>                       
                        </tr>
                    </thead>

                    <tbody className= "m-3 p-5" id="userData">
                        {lusers.map(users => {
                            return(
                            <tr>
                                <td>{users.first_name}</td>
                                <td>{users.last_name}</td>
                                <td>{users.email}</td>
                                <td>{users.mobile}</td>
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

export default Listuser;