import {  ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Airbnb Clone",
        description: "A responsive MERN-based web app for browsing, booking, and reviewing hotels with integrated Google Maps support.",
        image: "/projects/airbnb.png",
        tags: ["Express.js", "Node.js", "MongoDB"],
        github: "#"
    },
    {
        id: 2,
        title: "SignSpeak",
        description: "Enables seamless communication by translating sign language into text and speech using AI, OpenCV, and TensorFlow.",
        image: "projects/signspeak.png",
        tags: ["React", "WebRTC", "WebSockets"],
        github: "#"
    },
    {
        id: 3,
        title: "HyperSpectral Image classification for Crops",
        description: "A transformer-based semi-supervised pipeline achieving high-accuracy classification across multi-band hyperspectral data.",
        image: "/projects/hyperspectral.png",
        tags: ["Python", "Pytorch", "Jupyter Notebook"],
        github: "#"
    },

];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured
                    <span className="text-primary"> Projects
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                href={project.github} className="text-foreground/80  hover:text-primary transition-colors duration-300"
                                target="_blank"
                            ><Github size={20}/></a>
                                </div>
                            </div>
                            </div>
                            </div>
                    ))}
                </div>
                <div className="text-center mt-12 flex items-center justify-center gap-4">
                    <a
                        href="https://github.com/S4M-0403"
                        className="cosmic-button w-fit flex items-center"
                        target="_blank"
                    >
                        Github 
                    </a>
                    <a
                        href="https://leetcode.com/u/shikhars4m/"
                        className="cosmic-button w-fit flex items-center"
                        target="_blank"
                    >
                        LeetCode
                    </a>
                </div>
            </div>
        </section>
    )
}