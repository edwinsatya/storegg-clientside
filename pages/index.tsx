import { useEffect } from "react";
import {
  Navbar,
  MainBanner,
  TransactionStep,
  FeaturedGame,
  Reached,
  Story,
  Footer,
} from "../components/organisms";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />

      <MainBanner />

      <TransactionStep />

      <FeaturedGame />

      <Reached />

      <Story />

      <Footer />
    </div>
  );
}
