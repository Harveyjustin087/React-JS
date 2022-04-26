import React from "react";
import banner from '../images/forzaBanner.jpg';
import forzaLogo from '../images/forzalogo.jpg';
import forzaWheel from '../images/wheel.jpeg';
import {Link} from 'react-router-dom';

function Contact(){
    return(
<body>
        <header>
            <div id="topbanner">
            <img src={banner} id="banner" width="100%" alt="Forza 5 Page Banner" tabIndex="1"/>
                <nav>
                    <ul>
                        <li tabIndex="2"><Link to="/home">Home</Link></li>
                        <li tabIndex="3"><Link to="/about">About</Link></li>
                        <li tabIndex="4"><Link to="/trailer">Trailer</Link></li>
                        <li tabIndex="5"><Link to="/media">Social Media</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="content">
            <section id="leftPanel">
                <article id="post">                   
                    <header>
                        <h2 tabIndex="6">Contact Information</h2>
                        <h2 tabIndex="7">Justin Harvey</h2>
                    </header>
                    <h2 tabIndex="8">Email: jharvey7599@conestogac.on.ca</h2>
                    <h2 tabIndex="9">Phone: 519 555-2799</h2>
                    <img src={forzaWheel} alt="Car Steering Wheel Image" tabIndex="10"/>
                </article>
            </section>
            <aside>
                <header>
                    <h1 tabIndex="11">Major Manufacturers Included:</h1>
                </header>
                <section>
                    <ul tabIndex="12">
                        <li>Acura</li>
                        <li>Audi</li>
                        <li>Aston Martin</li>
                        <li>Bentley</li>
                        <li>Bugatti</li>
                        <li>Cadillac</li>
                        <li>Chrysler</li>
                        <li>Chevrolet</li>
                        <li>Dodge</li>
                        <li>Ford</li>
                        <li>Ferrari</li>
                        <li>Honda</li>
                        <li>Jaguar</li>
                        <li>Lamborghini</li>
                        <li>Maserati</li>
                        <li>Mazda</li>
                        <li>Nissan</li>
                        <li>Porsche</li>
                        <li>Toyota</li>
                        <li>Many More!</li>
                    </ul>
                    <img src={forzaLogo} alt="Forza Video Game Logo" tabIndex="13"/>
                    <br/>
                </section>  
            </aside>
        </section>
        <footer>
            <h2 tabIndex="14">Created by Justin Harvey 2022</h2>
        </footer>
    </body>
    )
}
export default Contact;