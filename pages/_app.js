import AuthModal from "@/components/auth-modal";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation"; 
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  const pathname = usePathname(); 
  
  const hideOnCheckout = pathname === "/checkout";
  return (
    <>
  
  {!hideOnCheckout && (
        <>
          <link href="/css/bootstrap.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" />
          <link href="/css/responsive.css" rel="stylesheet" />
        </>
      )}

      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Component {...pageProps} />
      <AuthModal />
     <div className="fixed-buttons">        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+97143395123" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          // className="bg-green-500 text-green p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Phone Button */}
        <a
          href="tel:+97143395123" // Replace with your phone number
         className="phone"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>

      {!hideOnCheckout && <Header />}
    </>
  );
}
