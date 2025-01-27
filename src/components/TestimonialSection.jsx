import React from "react";
import "./TestimonialSection.css";
import avatar from "../assets/avatar.png"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The reasonable prices, the great atmosphere are only topped by the delicious food. Keep up the great work.",
      name: "Fouad Badawy",
      avatar:avatar, // Replace with actual image path
    },
    {
      id: 2,
      text: "Granny is simply the best. Great food, nice atmosphere and very reasonable prices. It just doesn’t get any better.",
      name: "Mahmoud Baghagho",
      avatar:avatar, // Replace with actual image path
    },
    {
      id: 3,
      text: "We’ve been to Granny many times over the years. We know what to expect: great food and awesome prices.",
      name: "Mostafa Mabrook",
      avatar: avatar, // Replace with actual image path
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>People talk</h2>
        <h3>Our Guestbook</h3>
      </div>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="avatar"
              />
              <span className="author-name">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
