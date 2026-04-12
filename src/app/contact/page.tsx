"use client";

import { Mail, Phone, MapPin } from "lucide-react";


const contactData = [
  {
    id: 1,
    title: "Our Offices",
    desc: ["Patna, Delhi, Chandigarh,", "Chhattisgarh, Jaipur"],
    icon: MapPin,
  },
  {
    id: 2,
    title: "Phone Number",
    desc: ["+91 9220582597", "+91 7859033144", "+91 8226888163"],
    icon: Phone,
  },
  {
    id: 3,
    title: "Email Address",
    desc: ["info@atlasmentor.com", "jitesh.gupta@atlasmentor.com"],
    icon: Mail,
  },
];


const InfoCard = ({ title, desc, icon: Icon }: any) => {
  return (
    <div className="bg-white border border-gray-200 p-8 text-center rounded-md shadow-sm hover:shadow-md transition">
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#6a7fb0] mb-4">
        <Icon className="text-white" />
      </div>

      <h3 className="font-semibold text-[#6a7fb0] mb-2">{title}</h3>

      <p className="text-gray-700">
        {desc.map((line: string, i: number) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

const ContactPage = () => {
  return (
    <section className="pb-20">
      {/* HERO */}
      <div className="w-full h-70 md:h-80 relative overflow-hidden bg-[#3b4578]">
        <div className="absolute inset-40 z-0">
          <Mail
            className="absolute right-10 top-1/2 -translate-y-1/2 text-white/20"
            size={200}
          />
          <Phone
            className="absolute left-1/3 top-1/2 -translate-y-1/2 text-white/20"
            size={240}
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>

            <div className="flex items-center gap-2 text-sm border border-white/30 rounded-md w-fit backdrop-blur-sm bg-white/10">
              <span className="px-3 py-1">Home</span>
              <span className="opacity-70">›</span>
              <span className="px-3 py-1">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="w-full bg-[#f5f7fb] py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactData.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="w-full bg-[#f5f7fb] py-16 px-6 md:px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: FORM */}
          <div className="relative bg-white p-8 md:p-10 border border-gray-200">
            {/* LEFT BORDER ACCENT */}
            <div className="absolute left-0 bottom-0 w-2 h-full bg-[#1f3c88]"></div>
            <div className="absolute left-0 bottom-0 w-full h-2 bg-[#1f3c88]"></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Feel free to contact atlas mentor team
            </h2>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              If you need assistance or have any questions, please feel free to
              reach out to the Atlas Mentor team. They are available to provide
              support and guidance.
            </p>

            {/* FORM */}
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#6a7fb0]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#6a7fb0]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-1 border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#6a7fb0]"
                />
              </div>

              <button
                type="submit"
                className="mt-3 bg-[#6a7fb0] text-white px-6 py-2 font-medium hover:bg-[#5a6fa0] transition flex items-center gap-2"
              >
                Request Contact Me
                <span>›</span>
              </button>
            </form>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="w-full h-full">
            <img
              src="/doctors.jpg"
              alt="doctor"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
