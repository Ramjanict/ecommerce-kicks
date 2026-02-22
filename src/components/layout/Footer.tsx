import Logo from "@/assets/images/footerLogo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";
import Newsletter from "../shared/Newsletter";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <Newsletter />
        <div className="bg-kicks-dark rounded-3xl px-4 pt-4  -mt-5">
          <div className="w-fll  flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-10  text-white">
            <div>
              <h4 className="text-kicks-orange font-bold text-base mb-3">
                About us
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            <div>
              <h4 className="text-kicks-orange font-bold text-base mb-3">
                Categories
              </h4>
              <ul className="space-y-2">
                {[
                  "Runners",
                  "Sneakers",
                  "Basketball",
                  "Outdoor",
                  "Golf",
                  "Hiking",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-kicks-orange font-bold text-base mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                {["About", "Contact", "Blogs"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-kicks-orange font-bold text-base mb-3">
                Follow us
              </h4>
              <div className="flex items-center gap-4">
                {[Facebook, Instagram, Twitter, IoLogoTiktok].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Social link"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <img src={Logo} alt="logo" className=" max-h-[300px] mt-16 " />
        </div>
        <div className="py-5 text-kicks-dark">
          <p className="text-center text-xs">© All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
}
