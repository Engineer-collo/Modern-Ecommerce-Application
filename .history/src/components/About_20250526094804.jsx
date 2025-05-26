import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Clothify</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Elevating your wardrobe with trendy, affordable fashion made for everyone.
          </p>
        </div>

        {/* Story & Mission - Block 1 */}
        <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2024, Clothify was born out of a passion for inclusive fashion. We wanted to make it easy for
              anyone to find stylish, quality clothes without breaking the bank.
            </p>
          </div>
          <img
            src="/cloathes.png"
            alt="Fashion 1"
            className="w-full max-w-md mx-auto my-6 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Story & Mission - Block 2 */}
        <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where fashion is accessible to everyone regardless of their background or budget. 
              With unique designs and sustainable practices, we bring value to every wardrobe.
            </p>
          </div>
          <img
            src="/cloathes2.png"
            alt="Fashion 2"
            className="w-full max-w-md mx-auto my-6 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Story & Mission - Block 3 */}
        <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Why Choose Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Clothify combines creativity, comfort, and affordability. Our customer-first approach has made us one of 
              the fastest-growing fashion brands.
            </p>
          </div>
          <img
            src="/cloathes3.png"
            alt="Fashion 3"
            className="w-full max-w-md mx-auto my-6 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Values */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">What We Believe In</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">🛍️ Accessibility</h3>
                <p className="text-gray-600">Affordable fashion that doesn't compromise on quality or style.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌱 Sustainability</h3>
                <p className="text-gray-600">We support ethical production and eco-friendly materials.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">💖 Community</h3>
                <p className="text-gray-600">We design for real people and celebrate diversity in fashion.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats or CTA */}
        <div className="py-12 px-4 bg-purple-100 text-center">
          <h2 className="text-3xl font-bold mb-4">Over 10,000 Happy Customers 🌟</h2>
          <p className="text-lg mb-6 text-gray-700">
            Join our growing community and find your perfect style with Clothify.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
