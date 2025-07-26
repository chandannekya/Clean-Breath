import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Leaf,
  BookOpen,
  Mail,
  Smile,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/lungs-leaf-nature-ecology-logo-free-vector-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: Facebook },
    { name: "Twitter", icon: Twitter },
    { name: "Instagram", icon: Instagram },
    { name: "LinkedIn", icon: Linkedin },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        {
          name: "Plants",
          href: "/plants",
          icon: Leaf,
          color: "text-green-500",
        },
        {
          name: "Blogs",
          href: "/blogs",
          icon: BookOpen,
          color: "text-yellow-500",
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          name: "Contact Us",
          href: "/contact",
          icon: Mail,
          color: "text-blue-500",
        },
        {
          name: "About",
          href: "/about",
          icon: Smile,
          color: "text-pink-500",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-green-200/30 via-green-100/30 to-green-200/30 text-gray-700 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="Clean Breath Logo" className="w-12 h-12" />
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Clean Breath
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              Discover plants that purify your air and create a healthier environment. Search by air quality needs to find the perfect plant that not only enhances your space but also boosts your well-being.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-800 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
                    >
                      <link.icon className={`w-4 h-4 ${link.color}`} />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Clean Breath. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>
              by{" "}
              <a
                href="https://github.com/chandannekya/Clean-Breath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                Chandan
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
