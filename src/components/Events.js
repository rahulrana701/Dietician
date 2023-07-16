import React , {useEffect} from 'react'
import "../styles/events.css"
import ScrollReveal from 'scrollreveal';

export default function Events() {
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.events-1', { delay: 300, origin: 'top' });
        sr.reveal('.events-2', { delay: 300, origin: 'top' });
        sr.reveal('.events-3', { delay: 300, origin: 'top' });


        return () => {
            sr.destroy();
        };
    }, []);
    return (
        <>
            <div className="events-content">
                <h1>UPCOMING EVENTS</h1>
                <div className="events">
                    <div className="events-1">
                        <p>Global Healt Conference <br />22-23 Feb ,2024, India</p>
                        <a href="https://www.clocate.com/global-public-health-conference-globeheal/85566/" target='_blank'  rel="noreferrer" >READ MORE</a>
                    </div>
                    <div className="events-2">
                        <p>Health Informatics Conference <br />25 Nov ,2023, New Delhi</p>
                        <a href="https://10times.com/e1rr-4pp1-f02s" target='_blank'  rel="noreferrer" >READ MORE</a>
                    </div>
                    <div className="events-3">
                        <p>Global Wellness Days <br />29 Dec , 2023 , Las Vegas</p>
                        <a href="https://www.globalwellnessday.org/join-global-wellness-day-and-dance-with-joy-2/" target='_blank'  rel="noreferrer" >READ MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}
