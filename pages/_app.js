import AuthModal from "@/components/auth-modal";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AuthModal />
    </>
  );
}
