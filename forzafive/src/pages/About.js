import React from "react";
import banner from '../images/forzaBanner.jpg';
import forzaLogo from '../images/forzalogo.jpg'
import forzaDrive from '../images/corvette.jpeg';
import {Link} from 'react-router-dom';

function About(){
    return(
<body>
        <header>
            <div id="topbanner">
                <img src={banner} id="banner" width="100%" tabIndex="1"/>
                <nav>
                    <ul>
                        <li tabIndex="2"><Link to="/home">Home</Link></li>
                        <li tabIndex="3"><Link to="/trailer">Trailer</Link></li>
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
                        <h1 tabIndex="6">About Page</h1>
                        <h1 tabIndex="7">Site Created by Justin Harvey</h1>
                    </header>
                    <table>
                        <tr>
                            <th tabIndex="8">Purpose</th>
                            <th tabIndex="10">Date</th>
                        </tr>
                        <tr>
                            <td tabIndex="9">For Conestoga college CP/A Program INFO3160</td>
                            <td tabIndex="11">January 2022</td>
                        </tr>
                    </table>
                    <br/>
                    <table>
                        <tr>
                            <td>Images soruces from: <a href="https://wall.alphacoders.com/by_sub_category.php?id=346488&name=Forza+Horizon+5+Wallpapers">Forza Wallpapers</a></td>
                            <td><a href="https://www.gtplanet.net/forza-horizon-5-is-the-biggest-launch-in-xbox-history-with-over-10-million-players/">Forza Sells 10 million</a></td>
                        </tr>
                    </table>
                    <figure>
                        <img src={forzaDrive} alt="Chevrolet Corvette" tabIndex="12"/>
                    <figcaption tabIndex="13">2021 Chevrolet Corvette</figcaption>
                    </figure>
                </article>
            </section>
            <aside>
                <header>
                    <h1 tabIndex="14">Major Manufacturers Included:</h1>
                </header>
                <section>
                    <ul tabIndex="15">
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
                    <img src={forzaLogo} alt="Forza Video Game Logo" tabIndex="16"/>
                    <br/>
                </section>  
            </aside>
        </section>
        <footer>
            <h2 tabIndex="17">Created by Justin Harvey 2022</h2>
        </footer>
    </body>
    )
}

export default About;