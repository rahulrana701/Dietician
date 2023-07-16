import React, { useEffect, useState } from 'react'
import "../styles/appointment.css"
import ScrollReveal from 'scrollreveal';



export default function Appointment() {
    const [appointmentStatus, setAppointmentStatus] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setAppointmentStatus('Your appointment has been fixed. We will get in touch with you  very shortly and tell you when our specialists will be available and when you can have a chat with them at the date you have fixed your appointment');
    };
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.make-appointment', { delay: 300, origin: 'top' });
        sr.reveal('.faq1', { delay: 300, origin: 'top' });
        sr.reveal('.faq2', { delay: 300, origin: 'top' });
        sr.reveal('.faq3', { delay: 300, origin: 'top' });


        return () => {
            sr.destroy();
        };
    }, []);
    return (
        <>
            <div className="appointment">
                <div className="make-appointment">
                    <h1>MAKE AN APPOINTMENT</h1>
                    <p>Office Hours : 07:30 and 19:00 Mon to Sat, Sun - Holiday</p>
                    {appointmentStatus ? (
                        <p>{appointmentStatus}</p>
                    ) : (
                        <form action="" onSubmit={handleFormSubmit}>
                            <input type="text" name="" id="" placeholder='Name' />
                            <input type="email" name="" id="" placeholder='Email' />
                            <select name="" id="" >
                                <option value="">Type of Service</option>
                                <option value="bfre">Belly Fat Reduction Exercise</option>
                                <option value="bnu">Balanced Nutriton Diet</option>
                                <option value="yt">Yoga Therapy</option>
                                <option value="mh">Meditation Healing</option>
                                <option value="wg">Weight Gain Program</option>
                            </select>
                            <input type="date" name="" id="" placeholder='Preferred Date' />
                            <select name="" id="" >
                                <option value="">Specialist To Consult With</option>
                                <option value="gh">Grace Hayne</option>
                                <option value="cd">Caroline Dass</option>
                                <option value="jk">Jude Karson</option>
                                <option value="lm">Lisa Mc.Nora</option>
                            </select>
                            <input type="submit" value="Fix Appointment" />
                        </form>
                    )}
                </div>

                <div className="faq">
                    <h1>FAQ'S</h1>
                    <div className="faqs">
                        <div className="faq1">
                            <h3>What are Health and Delecious Foods ?</h3>
                            <p>Healthy foods are typically those that provide essential nutrients,
                                vitamins, and minerals while promoting overall well-being and supporting
                                optimal body functions. These foods are often associated with various health
                                benefits and can contribute to maintaining a balanced diet</p>
                        </div>
                        <div className="faq2">
                            <h3>Why To Choose A Heathy lifestyle ?</h3>
                            <p>Adopting a healthy lifestyle can help prevent or manage various chronic diseases,
                                including heart disease, type 2 diabetes, obesity, certain cancers, and high blood
                                pressure. Regular exercise, a balanced diet, and proper nutrition contribute to
                                maintaining a healthy weight</p>
                        </div>
                        <div className="faq3">
                            <h3>Why People fail to remain fit?</h3>
                            <p>Setting unrealistic expectations can lead to disappointment and frustration. People
                                may expect rapid results or try to achieve an unsustainable level of fitness,
                                making it difficult to maintain their efforts over the long term</p>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
