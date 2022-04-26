import React from "react";
import banner from '../images/forzaBanner.jpg';
import forzaGif from '../images/forza.gif'
import forzaLogo from '../images/forzalogo.jpg'
import twitter from '../images/twitter.png';
import insta from '../images/insta.png';
import facebook from '../images/facebook.png';
import {Link} from 'react-router-dom';

function Media(){
    return(
        <body>
        <header>
            <div id="topbanner">
            <img src={banner} id="banner" width="100%" alt="Forza 5 Game Banner" tabIndex="1"/>
                <nav>
                    <ul>
                        <li tabIndex="2"><Link to="/home">Home</Link></li>
                        <li tabIndex="3"><Link to="/about">About</Link></li>
                        <li tabIndex="4"><Link to="/trailer">Trailer</Link></li>
                        <li tabIndex="5"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="content">
            <section id="leftPanel">
                <article id="post">   
                    <header>
                        <h1 tabIndex="6">Forza 5 Social Media Accounts</h1>
                    </header>                
                    <p tabIndex="7">Twitter: <a href="https://twitter.com/ForzaHorizon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" tabIndex="8">Forza 5 Twitter</a><img class="social" src={twitter} alt="Twitter Logo" tabIndex="9"/></p>
                    <p tabIndex="10">Instagram: <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjw7d2_4dD1AhUvkYkEHfWcApMQFnoECAUQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fforzahorizonofficial%2F%3Fhl%3Den&usg=AOvVaw0rsMt4XTzBB67mTI1svOBh" tabIndex="11">Forza 5 Instagram</a><img class="social" src={insta} alt="Instagram Logo" tabIndex="12"/></p>
                    <p tabIndex="13">Facebook: <a href="https://www.facebook.com/ForzaHorizon/" tabIndex="14">Forza 5 Facebook</a><img class="social" src={facebook}alt="Facebook Logo" tabIndex="15"/></p>
                </article>
            </section>
            <aside>
                <header>
                    <h1 tabIndex="16">Major Manufacturers Included:</h1>
                </header>
                <section>
                    <ul tabIndex="17">
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
                    <img src={forzaLogo} alt="Forza Video Game Logo" tabIndex="18"/>
                    <br/>
                </section>  
            </aside>
        </section>
        <footer>
            <h2 tabIndex="19">Created by Justin Harvey 2022</h2>
        </footer>
    </body>
    )
}

export default Media;