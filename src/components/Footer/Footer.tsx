// import React from "react";
// import XIcon from "@mui/icons-material/X";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import BusinessIcon from "@mui/icons-material/Business";
// import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
// import CallToAction from "../utils/CallToAction";
// import { Instagram, MailLock, MailOutlined } from "@mui/icons-material";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { Divider } from "@mui/material";
// import LastCallToAction from "../../pages/Home/LastCallToAction/LastCallToAction";
// function Footer() {
//   return (
//     <div className="footer" id="footer">
//       <div className="content text-sm lg:text-base">
//         <div>
//           <div className="logo-container w-[7rem] h-[4rem] flex flex-col shrink-0 mb-2">
//             <div className="logo"></div>
//           </div>
//           <p className="my-4 ml-2 font-serif italic font-semibold text-sm text-slate-700">
//             Let the Traveler In You Fly With Us
//           </p>
//           <div className="social-link mt-2 flex gap-2">
//             <a className="" href="#">
//               <FacebookOutlinedIcon color="primary" fontSize="small" />
//             </a>
//             <a className="" href="#">
//               <XIcon color="primary" fontSize="small" />
//             </a>
//             <a className="" href="#">
//               <MailOutlined color="primary" fontSize="small" />
//             </a>
//             <a className="" href="#">
//               <Instagram color="primary" fontSize="small" />
//             </a>
//           </div>
//         </div>
//         <div>
//           <h2 className=" font-bold mb-3">Our Address</h2>
//           <ul className="font-secondary flex flex-col gap-2">
//             <li className="flex gap-2">
//               <BusinessIcon color="primary" />
//               <span>26, Oba Akinjobi way, Ikeja GRA Lagos</span>
//             </li>
//             <li className="flex gap-2">
//               <PermPhoneMsgIcon color="primary" />
//               <span>+234-803-2000-432</span>
//             </li>
//             <li className="flex gap-2">
//               <WhatsAppIcon color="primary" />
//               <span>+234-803-2000-432</span>
//             </li>
//             <li className="flex gap-2">
//               <MailOutlined color="primary" />
//               <span>shurrelink@gmail.com</span>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-secondary font-bold mb-3">Quick Links</h2>
//           <ul className="font-secondary flex flex-col gap-2">
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">FAQs</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//             <li>
//               <a href="#">Direct Message</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-secondary font-bold mb-3">Newsletter</h2>
//           <div className="flex items-center gap-1">
//             <input className="input-box flex-grow" />
//             <MailLock />
//           </div>
//           <div className="flex justify-center mt-4">
//             <CallToAction
//               text="Subscribe"
//               variant="outlined"
//               color="secondary"
//             />
//           </div>
//         </div>
//       </div>
//       <Divider />
//       <h4 className="font-sans items-center text-center w-full font-semibold tracking-wider">
//         Copyright @2024
//       </h4>
//     </div>
//   );
// }

// export default Footer;
import {
  Facebook,
  Twitter,
  Mail,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  MapPinned,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r   from-green-50/30 via-blue-100 to-green-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div>
              <div className="logo-container w-[7rem] h-[4rem] flex flex-col shrink-0 mb-2">
                <div className="logo"></div>
              </div>
            </div>
            <p className="text-sm italic mb-4">
              Let the Traveler In You Fly With Us
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Mail size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="text-base">
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPinned size={25} className="mr-2" />
                26, Oba Akinjobi way, Ikeja GRA Lagos
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" /> +234-803-2000-432
              </li>
              <li className="flex items-center">
                <MessageCircle size={20} className="mr-2" /> +234-803-2000-432
                (WhatsApp)
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" /> shurrelink@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Direct Message
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none rounded-l-lg border-none bg-slate-50"
                  style={{ borderRadius: "2rem 0 0 2rem" }}
                />
                <Button
                  type="submit"
                  className="rounded-l-none rounded-r-lg text-slate-50"
                  style={{ borderRadius: "0 2rem 2rem 0" }}
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2024 Shurre Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
