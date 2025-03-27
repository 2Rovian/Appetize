
import Alt_Carrossel_Component from "./components/carrossel/Carrossel_Component";
import Popular_Component from "./components/Popular_Component";
import Famous_Component from "./components/Famous_Component";
import Discover_Component from "./components/Discover_Component";

export default function Home() {
  return (
    <div className="">
      <Alt_Carrossel_Component />
      <Popular_Component />
      <Famous_Component />
      <Discover_Component />
    </div>
  );
}
