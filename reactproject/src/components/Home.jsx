import React from "react";
import Body from "./Body";
import Header from "./Header";

function Home(){

    return (
    <div className="login">
      <div className="container">
        <title>Booking System</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <Header/>
        
        <Body/>
        
      </div>
    </div>
  );

}

export default Home;