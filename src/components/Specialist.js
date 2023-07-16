import React, { useEffect } from 'react'
import "../styles/specialist.css"
import ScrollReveal from 'scrollreveal';



export default function Speacialist() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '120px',
      duration: 1100,
    });

    sr.reveal('.specialist-1', { delay: 300, origin: 'top' });
    sr.reveal('.specialist-2', { delay: 300, origin: 'top' });
    sr.reveal('.specialist-3', { delay: 300, origin: 'top' });
    sr.reveal('.specialist-4', { delay: 300, origin: 'top' });



    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <>
      <div className="specialist-content">
        <h1>OUR HEALTH <br /><span>SPECIALIST'S TEAM</span></h1>
        <div className="specialist">
          <div className="specialist-1">
            <h2>Grace Hayne</h2>
            <p>Specialist</p>
          </div>
          <div className="specialist-2">
            <h2>Lisa Mc. Nora</h2>
            <p>Specialist</p>
          </div>
          <div className="specialist-3">
            <h2>Bruce Lane</h2>
            <p>Specialist</p>
          </div>
          <div className="specialist-4">
            <h2>Caroline Dass</h2>
            <p>Specialist</p>
          </div>
        </div>
      </div>
    </>
  )
}
