import React, { useEffect } from 'react'
import "../styles/services.css"
import ScrollReveal from 'scrollreveal';
import icon1 from '../components/Img/Servicesimg/icon1.png';
import icon2 from '../components/Img/Servicesimg/icon2.png';
import icon3 from '../components/Img/Servicesimg/icon3.png';


export default function Services() {

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '150px',
      duration: 1100,
    });

    sr.reveal('.life-container1', { delay: 300, origin: 'top' });
    sr.reveal('.life-container2', { delay: 300, origin: 'top' });
    sr.reveal('.life-container3', { delay: 300, origin: 'top' });

    return () => {
      sr.destroy();
    };
  }, []);


  return (
    <>
      <div className="services">
        <div className="services-text">
          <h1>OUR SERVICES</h1>
        </div>
        <div className="services2">
          <div className="services-content1">
            <h2><a href="/diet">Diet Plans</a></h2>
          </div>
          <div className="services-content2">
            <h2><a href="/recipes">Recipes Ideas</a></h2>
          </div>
          <div className="services-content3">
            <h2><a href="/calorie">Calorie Tracker</a></h2>
          </div>
        </div>
        <div className="daily-life-containers">
          <div className="life-container1">
            <img src={icon1} alt="" />
            <h3>Daily Exercise</h3>
            <p>Regular exercise helps improve cardiovascular health, strengthen muscles and bones, enhance flexibility, and increase overall physical fitness. It can reduce the risk of chronic diseases like heart disease</p>
            <a href="https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday" target='_blank'  rel="noreferrer" >Learn More</a>
          </div>
          <div className="life-container2">
            <img src={icon2} alt="" />
            <h3>Natural Foods</h3>
            <p>Natural foods refer to whole, unprocessed foods that are minimally or not altered from their original state. These foods are free from artificial additives, preservatives, and synthetic <br /> chemicals.</p>
            <a href="https://en.wikipedia.org/wiki/Natural_food" target='_blank'  rel="noreferrer" >Learn More</a>
          </div>
          <div className="life-container3">
            <img src={icon3} alt="" />
            <h3>Nutrition Plans</h3>
            <p>A nutrition plan is a structured approach to eating that is designed to meet specific health and dietary goals.Nutrition plans are typically customized to individual needs, taking into account factors such as age, sex, weight </p>
            <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/eat/calories.htm" target='_blank'  rel="noreferrer" >Learn More</a>
          </div>
        </div>
      </div>
    </>
  )
}
