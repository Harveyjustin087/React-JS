import React from "react";
import banner from '../images/forzaBanner.jpg';
import forzaLogo from '../images/forzalogo.jpg';
import {Link} from 'react-router-dom';
import video from '../images/Forza Horizon 5 Trailer.mp4'

function Trailer(){
    return(
        <body>
        <header>
            <div id="topbanner">
                <img src={banner} id="banner" width="100%" tabIndex="1"/>
                <nav>
                    <ul>
                        <li tabIndex="2"><Link to="/home">Home</Link></li>
                        <li tabIndex="3"><Link to="/about">About</Link></li>
                        <li tabIndex="4"><Link to="/contact">Contact</Link></li>
                        <li tabIndex="5"><Link to="/media">Social Media</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="content">
            <section id="leftPanel">
                <article id="post">
                    <header>
                        <h1 tabIndex="6">Forza 5 Official Trailer</h1>    
                    </header>              
                    <video width="620" height="340" controls autoplay alt="Forza 5 Trailer Video" tabIndex="7">
                        <source src={video} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                </article>
            </section>
            <aside>
                <header>
                    <h1 tabIndex="8">Major Manufacturers Included:</h1>
                </header>
                <section>
                    <ul tabIndex="9">
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
                    <img src={forzaLogo} alt="Forza Video Game Logo" tabIndex="10"/>
                    <br/>
                </section>  
            </aside>
        </section>
        <footer>
            <h2 tabIndex="11">Created by Justin Harvey 2022</h2>
        </footer>
    </body>
    )
}

export default Trailer;