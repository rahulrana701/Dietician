import React, { useEffect } from 'react'
import "../styles/healthadvisor.css"
import imge from "../components/Img/Healthadvisorimg/health-adviser-1.jpg"
import imge2 from "../components/Img/Healthadvisorimg/health-adviser-4.jpg"
import imge3 from "../components/Img/Healthadvisorimg/health-adviser-5.jpg"
import imge4 from "../components/Img/Healthadvisorimg/img-highlight-adviser.jpg"
import ScrollReveal from 'scrollreveal';

export default function Healthadvisor() {

    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.advisor-img1 img', { delay: 300, origin: 'top' });
        sr.reveal('.advisor-content h1', { delay: 300, origin: 'top' });
        sr.reveal('.advisor-content p', { delay: 300, origin: 'top' });
        sr.reveal('.advisor2-img1 img', { delay: 300, origin: 'top' });
        sr.reveal('.advisor2-img2 img', { delay: 300, origin: 'top' });
        sr.reveal('.advisor2-img3 img', { delay: 300, origin: 'top' });
        sr.reveal('.advisor2-img4 img', { delay: 300, origin: 'top' });

        return () => {
            sr.destroy();
        };
    }, []);

    return (
        <>
            <div className="advisor">
                <div className="advisor-img1">
                    <img src={imge} alt="" />
                </div>
                <div className="advisor-content">
                    <h1>Why People Need A <br /> <span> Health Advisor</span> </h1>
                    <p>A health advisor can provide personalized guidance and support <br /> tailored to an
                        individual's specific health goals, needs, and circumstances. <br />They can help
                        create a customized plan and provide ongoing assistance in <br />achieving and
                        maintaining optimal health.</p>
                    <div className="buttons">
                        <button><a href="https://www.paybima.com/blog/health-insurance/benefits-of-having-a-good-health-advisor-in-india/#:~:text=A%20health%20advisor%20analyses%20your,per%20their%20requirement%20and%20budget." target='_blank'  rel="noreferrer" > Read More</a></button>
                    </div>
                </div>
            </div>

            <div className="advisor2">
                <div className="advisor2-img1">
                    <img src={imge2} alt="" />
                    <p>Exercise In Fresh Air</p>
                </div>
                <div className="advisor2-img2">
                    <img src={imge3} alt="" />
                    <p>Expert Health Advisor</p>
                </div>
                <div className="advisor2-img3">
                    <img src={imge4} alt="" />
                    <p>Nature Foods For Health</p>
                </div>
                <div className="advisor2-img4">
                    <img src={imge} alt="" />
                    <p>Drink With Salads</p>
                </div>
            </div>
        </>
    )
}
