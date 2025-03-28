
import Alt_Carrossel_Component from "./components/carrossel/Carrossel_Component";
import Popular_Component from "./components/Popular_Component";
import Famous_Component from "./components/Famous_Component";
import Discover_Component from "./components/Discover_Component";
import CallToAction from "./components/CallToAction";
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
