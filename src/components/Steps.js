import React, { useEffect } from 'react'
import "../styles/steps.css"
import icon1 from "../components/Img/Stepsimg/icon4.png";
import icon2 from "../components/Img/Stepsimg/icon3.png";
import icon3 from "../components/Img/Stepsimg/icon2.png";
import icon4 from "../components/Img/Stepsimg/icon1.png";
import ScrollReveal from 'scrollreveal';


export default function Steps() {
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.steps-1', { delay: 300, origin: 'top' });
        sr.reveal('.steps-2', { delay: 300, origin: 'top' });
        sr.reveal('.steps-3', { delay: 300, origin: 'top' });
        sr.reveal('.steps-4', { delay: 300, origin: 'top' });


        return () => {
            sr.destroy();
        };
    }, []);
    return (
        <>
            <div className="steps-content">
                <h1>SOLUTION IN FOUR EASY STEPS <br /><span>FOR A SUCCESSFULL LIFE </span> </h1>
                <div className="steps">
                    <div className="steps-1">
                        <img src={icon1} alt="" />
                        <h2>Check Your Calories</h2>
                        <p>Contact us to get started with your journey towards a healthy life</p>
                    </div>
                    <div className="steps-2">
                        <img src={icon2} alt="" />
                        <h2>GET YOUR MEAL PLAN</h2>
                        <p>get your meal plan and start living a healthy life</p>
                    </div>
                    <div className="steps-3">
                        <img src={icon3} alt="" />
                        <h2> Analysis</h2>
                        <p>Get proper Analysis on your diet and health which can lead you towards your goal</p>
                    </div>
                    <div className="steps-4">
                        <img src={icon4} alt="" />
                        <h2>Happy Life</h2>
                        <p>Live a healthy life and inspire young generations and people around you </p>
                    </div>
                </div>
            </div>
        </>
    )
}
