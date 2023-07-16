import React, { useEffect } from 'react'
import "../styles/clients.css"
import person1 from "../components/Img/Clietnsimg/person1.jpg"
import person2 from "../components/Img/Clietnsimg/person2.jpg"
import person3 from "../components/Img/Clietnsimg/person3.jpg"
import person4 from "../components/Img/Clietnsimg/person4.jpg"
import person5 from "../components/Img/Clietnsimg/person5.jpg"
import person6 from "../components/Img/Clietnsimg/person6.jpg"
import ScrollReveal from 'scrollreveal';


export default function Clients() {
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.cstories1', { delay: 300, origin: 'top' });
        sr.reveal('.cstories2', { delay: 300, origin: 'top' });
        sr.reveal('.cstories3', { delay: 300, origin: 'top' });
        sr.reveal('.cstories4', { delay: 300, origin: 'top' });
        sr.reveal('.cstories5', { delay: 300, origin: 'top' });
        sr.reveal('.cstories6', { delay: 300, origin: 'top' });

        return () => {
            sr.destroy();
        };
    }, []);
    return (
        <>
            <div className="clients">
                <h1>SUCCESSFUL STORIES FROM <br /> <span>CLIENT'S EXPERIENCE</span> </h1>
                <div className="cstories">
                    <div className="cstories1">
                        <img src={person1} alt="" />
                        <h3>John Wakes &nbsp; <span>&#9733;&#9733;&#9733;</span></h3>
                        <hr />
                        <p>Thankyou Aava now I can make my own diet plan, as they provide recipes according to the macros..</p>
                    </div>
                    <div className="cstories2">
                        <img src={person2} alt="" />
                        <h3>Lucy &nbsp; <span>&#9733;&#9733;&#9733;</span></h3>
                        <hr />
                        <p>My life got Changed after I met Aava Health Coach </p>
                    </div>
                    <div className="cstories3">
                        <img src={person3} alt="" />
                        <h3>Drake &nbsp; <span>&#9733;&#9733;&#9733;</span></h3>
                        <hr />
                        <p>I have lost 30kg in 4 months , and I am feeling more confident now</p>
                    </div>
                    <div className="cstories4">
                        <img src={person4} alt="" />
                        <h3>Joseph &nbsp; <span>&#9733;&#9733;&#9733;</span></h3>
                        <hr />
                        <p>Now I can proudly say that , I am fit only because of Aava Health Coach   </p>
                    </div>
                    <div className="cstories5">
                        <img src={person5} alt="" />
                        <h3>Greecy &nbsp; <span>&#9733;&#9733;&#9733;</span></h3>
                        <hr />
                        <p>The diet plan was excellent I can see results in just few weeks</p>
                    </div>
                    <div className="cstories6">
                        <img src={person6} alt="" />
                        <h3>Lushang &nbsp; <span>&#9733;&#9733;&#9733;</span></h3>
                        <hr />
                        <p>Aava Health Coach has changed my life and now I am in my best shape</p>
                    </div>
                </div>
            </div>
        </>
    )
}
