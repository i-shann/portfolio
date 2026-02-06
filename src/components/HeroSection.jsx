import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                        <span style={{ opacity: 0 }} className="animate-fade-in">Hi, I'm </span>


                        <span style={{ color: '#483AA0' }} className="opacity-0 animate-fade-in-delay-1">Shan </span>

                    </h1>
                    <p className="text-lg md:text-x text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Hi, I’m Shan. I’m passionate about IT and technology, and I love exploring creative ways to combine storytelling with tech. I’ve worked on projects related to content and gaming, and I’m always eager to learn new skills whether it’s app development, IoT, or something new. I enjoy challenging myself to innovate and grow every day.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-base md:text-lg text-muted-foreground mb-3 font-medium">
                    scroll
                </span>
                <ArrowDown className="h-8 w-8 text-[#483AA0]" />
            </div>



        </section>
    );
};