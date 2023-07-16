import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/main.css"
import strength from "../components/Img/Mainimg/strength.png"
import logoapple from "../components/Img/Mainimg/seb.png"
import notes from "../components/Img/Mainimg/note.png"
import Healthadvisor from "../components/Healthadvisor";
import Services from "../components/Services";
import Plan from "../components/Plan";
import Events from "../components/Events";
import Steps from "../components/Steps";
import Speacialist from "../components/Specialist";
import Appointment from "../components/Appointment";
import Clients from "../components/Clients";
import Footer from "../components/Footer";




export default function Main() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="main">
                <div className="main-container">
                    <Slider {...settings}>
                        <div className="main-container-content">
                            <h1>You Can Transform <br /> Health Through Habit Change!</h1>
                            <p>Transforming your health through habit change requires
                                identifying <br /> unhealthy habits and implementing new, positive
                                <br /> Define specific health goals that you want to achieve.</p>
                            <a href="https://feelfreshnutrition.com/blog/2022/10/26-change-your-life-by-updating-your-habits" target="_blank"  rel="noreferrer" >Learn More About It</a>
                        </div>
                        <div className="main-container-content">
                            <h1>Nutrition Advice</h1>
                            <p>How effecient you can lead your life in food ?</p>
                            <div className="logos">
                                <div className="logo1">
                                    <img src={strength} alt="" />
                                    <p>Effecient <br /> workout</p>
                                </div>
                                <div className="logo2">
                                    <img src={logoapple} alt="" />
                                    <p>Right Food<br /> To eat</p>
                                </div>
                                <div className="logo3">
                                    <img src={notes} alt="" />
                                    <p>Diet <br /> chart</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
            <Healthadvisor />
            <Services />
            <Plan />
            <Events />
            <Steps />
            <Speacialist />
            <Appointment />
            <Clients />
            <Footer />
        </>
    )
}
