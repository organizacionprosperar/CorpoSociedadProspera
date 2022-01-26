import React from 'react';
import '../App.css'
import one from "../assets/one.jpg"
import second from "../assets/second.jpg"
import third from "../assets/third.jpg"

const Home = () => {
    return (
        <div >
            {/* <div class="container-scroll">      </div> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={one}  alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={second}  alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={third}  alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
            <br/>

            <div className="container-noticias">
            <br></br>
            <br></br>
                <h1>Noticias</h1>
            </div>
            <br></br>
            <br></br>
           
        </div>
    );
};

export default Home;
