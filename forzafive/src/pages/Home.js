import React from "react";
import banner from '../images/forzaBanner.jpg';
import forzaGif from '../images/forza.gif'
import forzaLogo from '../images/forzalogo.jpg'
import {Link} from 'react-router-dom';

function Home(){
    return(
    <body>
        <header>
            <div id="topbanner">
                <img src={banner} id="banner" width="100%" alt="Forza 5 Game Banner" tabIndex="1"/>
                <nav>
                    <ul>
                        <li tabIndex="2"><Link to="/trailer">Trailer</Link></li>
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
                        <h1 tabIndex="6">Forza 5 Home Page</h1>
                        <img src={forzaGif} alt="Forza Cars Driving Gif" tabIndex="7"/>
                        <p tabIndex="8">This page is designed to give a first hand look at Forza Horizon Motorsport 5 the popular car racing game for 
                            Xbox Series X and the PC.
                        </p>
                        <hr class="splitter"/>
                    </header>
                    <h4 tabIndex="9">Forza 5 Theme Song</h4>
                    <div id="theme">
                        <div data-video="dujPgJNBL44"
                        data-autoplay="0"
                        data-loop="1"
                        id="youtube-audio"
                        alt="Forza 5 Theme Song"
                        tabIndex="9">
                    </div>
                </div>
                <br/>
                <hr class="splitter"/>
                <p tabIndex="10">Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Begin Your Horizon Adventure today and add to your Wishlist! <br/>
                    Source: <a href="https://store.steampowered.com/app/1551360/Forza_Horizon_5/">https://store.steampowered.com/app/1551360/Forza_Horizon_5/</a>
                </p>
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

export default Home;