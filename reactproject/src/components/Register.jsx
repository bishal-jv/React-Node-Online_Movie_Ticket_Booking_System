import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";



function Register() {

    const location = "localhost";
    const [fname , setfname] = useState("");
    const [lname , setlname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const [mobile , setmobile] = useState("");
    const navigate = useNavigate();

    async function callregisterAPI(e) {
        e.preventDefault();

        const data = {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "password": password,
            "mobile": mobile
        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        try {
            //register api call
            const fetchResponse = await fetch(`http://${location}:3000/users/register/`, settings);
            const data = await fetchResponse.json();
            navigate("/");
            window.confirm(data.message)
            return data;
        } 
        catch (e) {
            return e;
        }

    };


  return (
    <div className="register">
      <div className="container">
        <title>Register</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="../index.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <div className="container main-container border border-2 border-secondary">
            <header className="row border-bottom border-2 border-secondary"><h3>Register Page</h3></header>
            <div className = "row col-md-7 mx-auto">
                <form className = "align-self-sm-center m-5 pb-5 needs-validation mx-auto border" onSubmit={callregisterAPI}>
                    
                    <div className= "m-2 p-2">
                        <label className= "form-label" htmlFor="fname">First Name </label>
                        <input type="text" value={fname} onChange={e => setfname(e.target.value)} id="fname" className="form-control m-3 mx-auto" placeholder="Enter first name" name="fname" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="lname" >Last Name </label> 
                        <input type="text" value={lname} onChange={e => setlname(e.target.value)} id="lname" className="form-control m-3 mx-auto" placeholder="Enter last name" name="lname" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="email" >Email</label> 
                        <input type="email" value={email} onChange={e => setemail(e.target.value)} id="email" className="form-control m-3 mx-auto" placeholder="Enter email" name="email" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label className="form-label" htmlFor="password">Password </label>
                        <input type="password" value={password} onChange={e => setpassword(e.target.value)} id="password" className="form-control m-3 mx-auto" placeholder="Enter Password" name="password" required/>
                    </div>

                    <div className= "m-2 p-2">
                        <label  className="form-label" htmlFor="mobile">Mobile no  </label>
                        <input type="number" value={mobile} onChange={e => setmobile(e.target.value)} id="mobile" className="form-control m-3 mx-auto" placeholder="Enter mobile no" name="mobile" required/>
                    </div>

                    <div className= "row m-4 ">  
                        <button className="btn btn-primary" type="submit">Save</button> 
                        <a className="btn border" href="/">Cancel</a>
                    </div>

                </form>   
            </div>
            
        </div>

      </div>
    </div>
  );
}

export default Register;