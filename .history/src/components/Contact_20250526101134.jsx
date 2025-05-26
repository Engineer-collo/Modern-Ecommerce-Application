import React, { useState } from 'react';

const Contact = ({ showSuccessToast }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showSuccessToast("Message sent Successfully.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-600">We'd love to hear from you!</h3>
          <p className="text-gray-600">
            Whether you have a question about our products, sizing, or returns—or just want to say hi—we’re here to help!
          </p>
          <div>
            <p className="text-gray-700 font-medium">
              📞 Phone: <a href="tel:0743250838" className="font-normal text-purple-600 hover:underline">+254 712 345678</a>
            </p>
            <p className="text-gray-700 font-medium">
              📧 Email: <a href="mailto:collinslikhomba@gmail.com" className="font-normal text-purple-600 hover:underline">sup.com</a>
            </p>
            <p className="text-gray-700 font-medium">
              📍 Location: <span className="font-normal">Nairobi, Kenya</span>
              {/* Optional: <a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer" className="ml-2 text-purple-600 hover:underline">View on Map</a> */}
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded-lg p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
