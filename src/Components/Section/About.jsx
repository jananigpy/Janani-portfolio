import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontEndSkills = ["HTML", "CSS", "Javascript", "React", "Hooks", "Redux","Tailwind CSS", "React Router", "Rest API","GIT/GITHUB", "Responsive Design", "Accessibility", "JEST","React Testing Library","Axios", "Vite", "Webpack","Babel","Figma to code"];

    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent 
            text-center">
                {" "}
                About Me
            </h2>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am passionate about leveraging my technical expertise in a dynamic development environment.
                    Adept at collaborating with cross-functional teams and adhering to Agile methodologies. 
                    Currently contributing to impactful projects at TataConsultancy Services
                </p>
            </div>
            <div className="grid grid-cols-1  gap-6">
               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                 <h3 className="text-xl font-bold mb-4">SKILLS</h3>
                 <div className="flex flex-row flex-wrap gap-2">
                    {frontEndSkills.map((tech,key) => (
                        <span key ={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            {tech}

                        </span>

                    )
                    
                    )}
                 </div>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                   <ul className="list-disc list-inside text-gary-300 space-y-2">
                    <li>
                        <strong>B.Tech in Computer Science</strong> - Pondicherry University (2017-2021)
                    </li>
                     <li>
                        Relevant Coursework: Web Development, UI/UX Design, Data Structures & Algorithms, JavaScript Programming, Responsive Design, React.js, Database Management, Version Control (Git), REST API Integration
                    </li>
                   </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">FrontEnd Developer at Tata Consulatncy Services (2021-present)</h4>
                        <p>Developed and maintained ecommerce website Verizon.</p>
                    </div>
                  
                  </div>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
}