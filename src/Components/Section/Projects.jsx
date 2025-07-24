
import { RevealOnScroll } from "../RevealOnScroll"
export const Projects = () => {
    return <section id="project" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent 
            text-center">
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1  gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Ecommerce website</h3>
                        <p className="text-gray-400 mb-3">
                            Developed and maintained ecommerce website Verizon using React JS, Javascript, HTML, CSS and Tailwind CSS.
                            Verizon is a telecommunication company providing mobile phone devices and data plans to its customer. Contributed in verzion assisted and digital channels.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Redux","GIT", "SonarQube", "Jenkins"].map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project - {" "}
                            </a>
                        </div>
                    </div>
                                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Banking Website</h3>
                        <p className="text-gray-400 mb-3">
                            A responsive and accessible frontend interface developed for Citi Bank’s internal customer management and transaction dashboard. The application allows users to view account details, make secure transactions, manage beneficiaries, and track recent activities through an intuitive UI.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React.js", "JavaScript (ES6)", "HTML5", "CSS3", "Tailwind CSS / SCSS", "Axios", "React Router", "Jest", "Git", "REST APIs"].map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project - {" "}
                            </a>
                        </div>
                    </div>
                </div>




            </div>
        </RevealOnScroll>
    </section>
}