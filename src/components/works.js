import './works.css';


function Works() {

    return (

        <section className="how-section">
            <h2 className="how-title">How It Works</h2>

            <div className="how-grid">
                <div className="how-card">
                <div className="how-num">1</div>
                <h3>Book Your Appointment</h3>
                <p>Schedule online or by phone for an in‑home visit or a time at our Lafayette office.</p>
                </div>

                <div className="how-card">
                <div className="how-num">2</div>
                <h3>Professional Collection</h3>
                <p>Our trained phlebotomist collects your blood or urine sample safely and gently.</p>
                </div>

                <div className="how-card">
                <div className="how-num">3</div>
                <h3>Fast Results</h3>
                <p>Samples are processed and shipped to partner labs; results go to you or your provider ASAP.</p>
                </div>
            </div>
        </section>



    );
}

export default Works;