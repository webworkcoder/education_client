import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Topbar = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL || "example@email.com";
  const phone = process.env.NEXT_PUBLIC_PHONE || "9220582597";
  const phone2 = process.env.NEXT_PUBLIC_PHONETWO || "7859033144";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "9220582597";

  return (
    <section className="bg-gradient-to-r from-[#405b9c] to-[#133585] text-white text-xs md:text-sm py-2 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* LEFT SIDE */}
        <div className="flex w-full md:w-auto items-center">
            {/* mobile */}
          <div className="flex md:hidden w-full justify-center p-3 items-center gap-2 text-center">
            <Phone className="w-3 h-3" />
            <span>{phone}</span>

            <span className="opacity-70">|</span>

            <Phone className="w-3 h-3" />
            <span>{phone2}</span>
          </div>

          {/*  DESKTOP  FULL INFO */}
          <div className="hidden md:flex items-center gap-6">
            {/* WhatsApp */}
            <Link
              href={`https://wa.me/${whatsapp}`}
              className="flex items-center gap-1.5 hover:text-green-300 transition"
            >
              <BsWhatsapp className="w-4 h-4" />
              <span>{whatsapp}</span>
            </Link>

            {/* Phone 1 */}
            <Link
              href={`tel:${phone}`}
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>

              <Phone className="w-4 h-4 sm:hidden" />
              <span>{phone2}</span>
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 hover:text-yellow-200 transition"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </Link>
          </div>
        </div>

        {/*  RIGHT SIDE  */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="hover:text-blue-200 transition">
            <FaFacebook className="w-4 h-4" />
          </button>
          <button className="hover:text-pink-200 transition">
            <FaInstagram className="w-4 h-4" />
          </button>
          <button className="hover:text-red-300 transition">
            <FaYoutube className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
