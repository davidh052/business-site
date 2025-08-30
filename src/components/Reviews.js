import './Reviews.css';

function Reviews() {

    return (

        <section className="reviews-section">
        <h2 className="reviews-title">See What Others Are Saying About Us...</h2>
        <div className="reviews-row top-rows">
            <blockquote className="review top">
                "Arina is a kind, efficient, professional and skilled phlebotomist. She is very responsive to email and phone calls. We've used her service many times over the past two years and are so grateful to have her." - Suzanne J.
            </blockquote>
            <blockquote className="review top">
                "I've been told I have small vein and I sometimes struggle to give blood, depending on the phlebotomist. That wasn't an issue with Arina, she found my vein straight away, it was painless and efficient" - Gabriela G.
            </blockquote>
            <blockquote className="review top">
                "Med Lab is outstanding. I have used them on several occasions and find Arina to be extremely competent. She is gentle, pleasant, and knowledgeable about any lab paperwork or kits that I have brought in." - Pat K.
            </blockquote>
            
        </div>

        <div className="reviews-row bottom-rows">
            <blockquote className="review bottom">
                "Arina is an amazing phlebotomist. We had to search high and low to find one that fit our family member's medical needs, and she is truly 5/5 stars great! Very communicative with a wonderful bedside manner and great medical care." - Moxxy C.
            </blockquote>
            <blockquote className="review bottom">
                "Arina is a very kind accommodating phlebotomist. She is always responsive to texts and calls and is understanding if you need to move an appointment. Highly recommend MED lab services!" - Julie G.
            </blockquote>
        </div>
        </section>



    );



}


export default Reviews;