import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connnect with me</h4>
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below
      </p>

      <form className=' max-w-2xl mx-auto'>
        <div className=' grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required />
          <input type="email" placeholder='Enter your email' required />
        </div>
        <textarea rows='6' placeholder='Enter your message' required></textarea>

        <button type='submit'>Submit Now</button>
      </form>
    </div>
  );
};

export default Contact;