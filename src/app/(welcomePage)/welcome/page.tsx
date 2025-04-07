import WelcomeNavbar from "../components/WelcomeNavbar";
import bgImg from "../../../../public/bgImg3.jpg";
import Image from "next/image";

export default function WelcomePage() {
    return (
        <div>
            <WelcomeNavbar />
            <p className="">Página de welcome</p>
            <Image
                src={bgImg} 
                alt="Background"
                fill
                className="object-cover object-center -z-10" 
                priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent -z-10" />

        </div>
    )
}