import './Contacts.css'


function Contact() {

    return (

        <section className="contact-map-section">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>Phone: 925-476-5082 Fax: 925-871-4113</p>
                <p>Email: info@medlabservices1.com</p>
                <p>Address: 3190 Old Tunnel Rd St B, Lafayette, CA 94549 </p>
            </div>

            <div className="map-container">
                
                <iframe
                title="M.E.D Lab Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.4723032029196!2d-122.09651072411079!3d37.89602177195504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085631a597bfd1d%3A0x5cdb7a14f300f8b5!2sMED%20LAB%20Services!5e0!3m2!1sen!2sus!4v1754281620446!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>

    );


}

export default Contact