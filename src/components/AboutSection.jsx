import { Code } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Engineer and AI Geek</h3>
                        <p className="text-muted-foreground">
                            Final Year B.Tech CSE student at JIIT NOIDA, I specialize in full-stack web development, machine learning models and data analytics.
                        </p>
                        <p className="text-muted-foreground">
                            I love building scalable, efficient, and user-focused solutions that bring innovation closer to everyday use. Constantly experimenting with new frameworks and tools, I aim to stay at the forefront of modern development and AI integration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                Get in Touch.
                            </a>

                            <a href="https://drive.google.com/file/d/1QzvMhTmJIQe9RPuFE2Av5CvKEnx1wDSf/view?usp=drive_link" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Resume/CV
                            </a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-stack Web Development</h4>
                                    <p className="text-muted-foreground ">Building responsive and performant web apps using modern frameworks like React and Node.js.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
                                    <p className="text-muted-foreground ">Developing intelligent, data-driven models that solve real-world problems efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Analytics & Visualization</h4>
                                    <p className="text-muted-foreground ">Turning raw data into clear, actionable insights through analysis and visualization.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};