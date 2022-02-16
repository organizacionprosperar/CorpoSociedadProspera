import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';
import dos from "../assets/img/dos.jpg"
import tres from "../assets/img/tres.jpg"
import cuatro from "../assets/img/cuatro.jpg"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this)
    }

    slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }


    componentDidMount() {
        axios.get("https://jairo10.pythonanywhere.com/noticias/news/")
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log(response.data)
            })
    }

    render() {
        const { data } = this.state
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
                            <img className="tamaño" src={dos} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className="tamaño" src={cuatro} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className="tamaño" src={tres} alt="..." />
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
                <br />
                <br />

                <div className="container-noticias">

                    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 title-seccion'>
                        <a>Noticias</a>
                    </div>
                    <div className="container d-flex h-100">


                        {
                            data.map((slide) => {
                                return (
                                    <div className='container-fluid'>
                                        <div className="row">
                                            <div className='col-sm-12'>
                                                <div id="main-slider-container">

                                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">

                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active">
                                                                <div className="slider-card" >
                                                                    <div className="slider-card-image" >{slide.img}</div>
                                                                    <a href='' className="slider-card-title">{slide.title}</a>
                                                                    <p className="fecha-noticia">{slide.date}</p>
                                                                    <p className="slider-card-description">{slide.description}</p>
                                                                </div>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }


                    </div>
                </div>

            </div>
        );
    };
};

export default Home;
