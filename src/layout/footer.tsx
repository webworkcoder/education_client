import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">

      {/* TOP CALLBACK SECTION */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 md:px-16 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Request a Callback Today!
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Need personalized guidance for your MBBS journey abroad? Request a
              callback from Atlas Mentor’s expert advisors. We’re here to answer
              your questions and assist you in achieving your academic goals with
              confidence.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-200 text-black outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-200 text-black outline-none"
            />
            <button
              type="button"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-medium transition"
            >
              Request Callback
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-black text-gray-300 px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* LOGO + DESC */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">
              Atlas Mentor
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Atlas Mentor, a beacon of guidance for aspiring medical
              professionals, offers expert assistance in pursuing MBBS abroad.
              With personalized support and comprehensive solutions, our
              seasoned team ensures students find their place in esteemed
              medical universities worldwide.
            </p>
          </div>

          {/* ATLAS LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Atlas Mentor</h3>
            <ul className="space-y-2 text-sm">
              {[
                "About",
                "MBBS Countries",
                "MBBS Universities",
                "Why Atlas Mentor?",
                "FAQ's On Atlas Mentor",
                "Benefits of Atlas Mentor",
              ].map((item: string) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* STUDY ABROAD */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Study Abroad Location
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Russia",
                "Georgia",
                "Moldova",
                "Uzbekistan",
                "Kyrgyzstan",
                "Kazakhstan",
              ].map((country: string) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Academics</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 Delhi, Chhattisgarh, Jaipur, Chandigarh, Patna</li>
              <li>✉️ info@atlasmentor.com</li>
              <li>📞 +91 9220582597</li>
              <li>📞 +91 7859033144</li>
              <li>📞 +91 8226888163</li>
              <li>📞 +998990254451</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            Copyright © 2024 Atlas Mentor (Operated by ELITESTUDY ABROAD PVT LTD.).
            All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
              (item: string) => (
                <span
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;