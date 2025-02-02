import React from 'react'
// import $ from 'jquery'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    function showmenu(){
        $(".nvbr").addClass("active");
        console.log("clicked to show menu");
    }
    function closemenu(){
        $(".nvbr").removeClass("active");
        console.log("clicked to close menu");
    }

  return (
    <div>
        <header>
        <div className="logo">College</div>
        <div className="icon" onClick={showmenu}>menu</div>
       <nav className="nvbr">
        <button className="closeicon" onClick={closemenu}>Close</button>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contactus">Contact us</Link></li>
            <li><Link to="/Help">Help</Link></li>
        </ul>
     </nav>
        </header>
    </div>
  )
}

export default Navbar