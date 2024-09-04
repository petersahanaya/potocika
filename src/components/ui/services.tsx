import Container from "@/components/ui/container"
import ServiceCard from "@/components/ui/service-card";

// Services
import { TbCapture } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { TbDeviceVisionPro } from "react-icons/tb";


const services = [
    {
        title: "Capture underwater",
        description: "Showcasing stunning underwater photography that brings the beauty of the ocean to the surface.",
        icon: <TbCapture size={35} />
    },
    {
        title: "Galeries",
        description: "Transforming the world beneath the waves into an exceptional visual experience.",
        icon: <GrGallery size={25} />
    },
    {
        title: "Create vision",
        description: "Connecting audiences with the vibrant marine life and serene underwater landscapes.",
        icon: <TbDeviceVisionPro size={35} />
    },
]


const Services = () => {
    return (
        <Container className="bg-zinc-100 h-max py-44">
            <header className="pb-6 w-full flex justify-center">
                <h1 className="font-[400] w-[40%] text-center leading-[3rem] text-4xl heading">Contact and collaborating with me to get aesthetics diving photos</h1>
            </header>

            <div className="w-full h-[1px] bg-zinc-200"></div>

            <section className="flex items-center justify-center gap-8 mt-8">
                {services.map(service => (
                    <ServiceCard title={service.title} description={service.description}>
                        {service.icon}
                    </ServiceCard>
                ))}
            </section>
        </Container>
    )
}

export default Services