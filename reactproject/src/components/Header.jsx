import React from 'react';
import { isAdmin } from '../utils/auth';

function logout (e) {
e.preventDefault()
sessionStorage.removeItem("token");
window.location.replace("/");
}

function Header(props) {
  
  if(isAdmin()){
  return (
    <header className="row border-bottom border-2 border-secondary"><h3>Cinema Booking System - Admin</h3>   
        <div className="row">
            <nav className="navbar-right p-3 mx-auto navbar-light">
                <a className="navbar-brand" href="/home"> Home </a>
                <a className="navbar-brand" href="/addmovie"> Add Movie </a> 
                <a className="navbar-brand" href="/listmovie"> Update and Delete Movie </a>
                <a className="navbar-brand" href="/listuser"> Registered User List </a>
                <a className="navbar-brand" onClick={logout} > Logout </a>
            </nav> 
        </div>
    </header>
    
  )}

  else{
     return (
    <header className="row border-bottom border-2 border-secondary"><h3>Cinema Booking System</h3>   
        <div className="row">
            <nav className="navbar-right p-3 mx-auto navbar-light">
                <a className="navbar-brand" href="/home"> Home </a>
                <a className="navbar-brand" href="/bookticket"> Book Ticket </a>
                <a className="navbar-brand" href="/bookinghistory"> Booking History </a>
                <a className="navbar-brand" href="/eticket"> Eticket </a>
                <a className="navbar-brand" onClick={logout}> Logout </a>
            </nav> 
        </div>
    </header>
  )} 

}

export default Header;