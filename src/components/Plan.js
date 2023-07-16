import React, { useEffect } from 'react'
import "../styles/plan.css"
import ScrollReveal from 'scrollreveal';

export default function Plan() {
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.plans', { delay: 300, origin: 'top' });
        sr.reveal('.plans2', { delay: 300, origin: 'top' });


        return () => {
            sr.destroy();
        };
    }, []);
    return (
        <>
            <div className="plan-container">
                <div className="plans">
                    <h1>CHANGE YOUR LIFE IN THE NEXT <br /> <span>90 DAYS OF PRACTISE</span></h1>
                    <p>Changing your life in 90 days through focused practice in health can have a <br /> significant impact on your  overall well-being.
                        Identify specific health goals <br /> you want to achieve in the next 90 days. It could be losing weight, improving <br /> fitness, eating a balanced diet, reducing stress, or developing <br /> a healthy sleep routine</p>
                </div>
                <div className="plans2">
                    <h1>Personalized <span>Nutrition Plans</span></h1>
                    <p>A personalized nutritional plan is a tailored approach to eating <br /> that is customized to an individual's specific needs, goals,<br /> and dietary requirements.It takes into account factors <br />such as age, sex, weight, height, activity level,<br /> food preferences, and any existing health conditions.</p>
                    <a href='/diet' >GET YOUR PLAN</a>
                </div>
            </div>
        </>
    )
}
