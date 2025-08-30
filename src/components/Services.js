import './Services.css';


function Services() {
    return (

        <section className="services-section">
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <h3>In-Home Blood Draws</h3>
                    <p>Professional blood draws in the comfort of your own home for adults and children.</p>
                </div>
                <div className="service-card">
                    <h3>SneakPeek Gender Test</h3>
                    <p>Know your baby's gender as early as 7 weeks with this 99.1% accurate blood test. Results in as little as 24 hours.</p>
                </div>
                <div className="service-card">
                    <h3>Specialty Kit Processing</h3>
                    <p>We handle all specialty kits and coordinate with partner labs across the U.S.</p>
                </div>
                <div className="service-card">
                    <h3>Urine Testing</h3>
                    <p>Quick and discreet collection with secure handling to ensure accurate and timely lab results.</p>
                </div>
                
            </div>
        </section>


    );
}


export default Services;