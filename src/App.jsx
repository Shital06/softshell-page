function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <section className="text-center max-w-2xl mx-auto">
          <img
            src="https://via.placeholder.com/150x50?text=SoftSell"
            alt="SoftSell Logo"
            className="mx-auto mb-6 h-16"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sell Software Smarter with{" "}
            <span className="text-blue-600">SoftSell</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            The best way to manage, market, and grow your SaaS business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Get Started
          </button>
        </section>
      </div>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-blue-600">📦</div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600 text-sm">
                Create your free account to get started with SoftSell in seconds.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-green-600">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Set Up</h3>
              <p className="text-gray-600 text-sm">
                Add your products, pricing, and branding in one simple dashboard.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-purple-600">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Start Selling</h3>
              <p className="text-gray-600 text-sm">
                Launch your SaaS business and track real-time performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600 text-sm">
                Designed to be simple and intuitive, SoftSell helps you get up
                and running quickly without technical skills.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Whether you're a startup or scaling enterprise, our platform
                grows with your needs seamlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm">
                Our expert team is available around the clock to assist you with
                any technical or business-related queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-2 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                “SoftSell made launching my SaaS product a breeze. The interface is clean, and their support is incredible!”
              </p>
              <div className="font-semibold text-blue-600">— Priya N., Startup Founder</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                “Everything is so smooth. I was able to scale my operations without needing a tech team. Highly recommended.”
              </p>
              <div className="font-semibold text-purple-600">— Arjun M., SaaS Marketer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
