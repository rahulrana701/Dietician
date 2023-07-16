import React, { useEffect } from 'react'
import "../styles/footer.css"
import facebook from "../components/Img/Footerimg/facebook-app-icon.png"
import twitter from "../components/Img/Footerimg/twitter-app-icon.png"
import linkedin from "../components/Img/Footerimg/linkedin-app-icon.png"
import instagram from "../components/Img/Footerimg/ig-instagram-icon.png"
import ScrollReveal from 'scrollreveal';

export default function Footer() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '150px',
      duration: 1100,
    });

    sr.reveal('.end1', { delay: 300, origin: 'top' });
    sr.reveal('.end2', { delay: 300, origin: 'top' });
    sr.reveal('.end3', { delay: 300, origin: 'top' });

    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <>
      <div className="end">
        <div className="end1">
          <li><h3>GET IN TOUCH</h3></li>
          <li>Address</li>
          <li>Chandigarh</li>
          <li>Sector-8</li>
          <li>Near Uncle Jacks</li>
          <li>Phone</li>
          <li>9501054380</li>
          <li>EMAIL:@rahulrana2001a@gmai.com</li>
          <li>response in 4 hours</li>
        </div>
        <div className="end2">
          <li><h3>Services</h3></li>
          <li><a href="/calorie">Calorie Tracker</a></li>
          <li><a href="/diet">Diet Plans</a></li>
          <li><a href="/recipes">Recipes</a></li>
        </div>
        <div className="end3">
          <li> <h3>GET SOCIAL</h3></li>
          <p>keep up date with all the latest and breaking social media news</p>
          <div className="logo">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="copy">
        <p>copyright &copy; Peredrift and other trademarks,service marks, and designs are the registered <br /> or   unregistered trademarks of rahul.inc in USA and other countries</p>
      </div>
    </>
  )
}
