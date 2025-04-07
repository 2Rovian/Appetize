import Alt_Carrossel_Component from "./components/Carrossel_Component";
import Popular_Component from "./(pages)/(homePage)/Popular_Component";
import Famous_Component from "./(pages)/(homePage)/Famous_Component";
import Discover_Component from "./(pages)/(homePage)/Discover_Component";
import CallToAction from "./(pages)/(homePage)/CallToAction";
import SearchCountries from "./components/SearchCountries";

export default function Home() {
  return (
    <div >
      <Alt_Carrossel_Component />
      <Popular_Component />
      <Famous_Component />
      <Discover_Component />
      <SearchCountries />
      <CallToAction />
    </div>
  );
}
