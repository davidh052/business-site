const reviews = [
  {
    text: "Arina is a kind, efficient, professional and skilled phlebotomist. She is very responsive to email and phone calls. We've used her service many times over the past two years and are so grateful to have her.",
    author: 'Suzanne J.',
  },
  {
    text: "I've been told I have small vein and I sometimes struggle to give blood, depending on the phlebotomist. That wasn't an issue with Arina, she found my vein straight away, it was painless and efficient.",
    author: 'Gabriela G.',
  },
  {
    text: 'Med Lab is outstanding. I have used them on several occasions and find Arina to be extremely competent. She is gentle, pleasant, and knowledgeable about any lab paperwork or kits that I have brought in.',
    author: 'Pat K.',
  },
  {
    text: "Arina is an amazing phlebotomist. We had to search high and low to find one that fit our family member's medical needs, and she is truly 5/5 stars great! Very communicative with a wonderful bedside manner and great medical care.",
    author: 'Moxxy C.',
  },
  {
    text: 'Arina is a very kind accommodating phlebotomist. She is always responsive to texts and calls and is understanding if you need to move an appointment. Highly recommend MED lab services!',
    author: 'Julie G.',
  },
]

function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 text-center mb-12">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <blockquote
              key={review.author}
              className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-brand-500"
            >
              <p className="text-text-body italic leading-relaxed mb-4">"{review.text}"</p>
              <cite className="text-brand-900 font-semibold not-italic">— {review.author}</cite>
            </blockquote>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reviews.slice(3).map((review) => (
            <blockquote
              key={review.author}
              className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-brand-500"
            >
              <p className="text-text-body italic leading-relaxed mb-4">"{review.text}"</p>
              <cite className="text-brand-900 font-semibold not-italic">— {review.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
