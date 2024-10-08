import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import BecomePartner from "../../components/BecomePartner";
import Footer from "../../components/Footer";
import B2B from "../../components/B2B"
import { useRef } from "react"
import { useInView } from "framer-motion"
import BackToTop from "../../components/BackToTop";
import SignUpForm from "../../components/SignUpForm";

export function Home() {
  const partner = useRef(null);
  const about = useRef(null);
  const b2b = useRef(null);
  const signup = useRef(null);
  const contacts = useRef(null);

  const partnerInView = useInView(partner, { margin: "-50% 0px" });
  const aboutInView = useInView(about, { margin: "-50% 0px" });
  const b2bInView = useInView(b2b, { margin: "-50% 0px" });
  const signupInView = useInView(signup, { margin: "-50% 0px" });
  const contactsInView = useInView(contacts, { margin: "-50% 0px" });

  return (
    <>
      <Header
        refList={{ partner, about, b2b, signup, contacts }}
        inViewList={{ 'partner': partnerInView, 'about': aboutInView, 'b2b': b2bInView, 'signup': signupInView, 'contacts': contactsInView }} />
      <BecomePartner refName={partner} refTarget={signup} />
      <AboutUs refName={about} />
      <B2B refName={b2b} />
      {/* <SignUpForm refName={signup} /> */}
      <Footer refName={contacts} />
      <BackToTop />
    </>
  )
}