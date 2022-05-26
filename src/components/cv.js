function WorkExperience(props) {
    return (
        <div className="max-w-4xl mx-auto my-10 bg-zinc-200 px-8 py-4 rounded-lg shadow-md">
            <div className="flex justify-center flex-col items-center sm:flex-row space-y-4 sm:space-y-0 pb-4">
                <div className=" flex flex-col">
                    <p className="text-center sm:text-left font-bold text-xl">{props.title}</p>
                    <p className="text-center sm:text-left italic text-lg">{props.company}</p>
                </div>
                <div className="flex flex-col sm:ml-auto">
                    <p className="text-center sm:text-right text-xl">{props.date}</p>
                    <p className="text-center sm:text-right italic text-lg">{props.location}</p>
                </div>
            </div>
            <p className="text-center sm:text-left">{props.description}</p>
            {props.tasks ? 
            <div>
            <p className="py-2 font-medium"> My tasks included:</p>
            <ul className="px-8 list-disc list-outside">
                {props.tasks.map(task => <li>{task}</li>)}
            </ul>
            </div> : null}
        </div>
    )
}


export default function CV() {
    return (
        <section id="cv" className="bg-zinc-50">
            <div className="px-10 py-20">
                <h1 className="text-center text-4xl sm:text-5xl text-zinc-800 font-medium pt-4 pb-4"> Work Experience</h1>
                <WorkExperience 
                    title="Robotics Engineer Intern"
                    company="Voliro Airborne Robotics"
                    date="Sep. 2021 – Mar. 2022"
                    location="Zürich, Switzerland"
                    description="Voliro is developing a 360° drone specialized for industrial inspection. The Voliro T drone (flying robot) can be equipped with a variety of Non-Destructive Testing (NDT) sensors, depending on the use-case."
                    tasks={[
                        "C++ and Python software development.",
                        "Significantly improving the wind robustness of the Voliro T drone through controller tuning and algorithmic improvements.",
                       "Developing unit tests.",
                        "Testing and validating features in realistic NDT missions.",
                        "Product demonstration and pilot training to potential customers and early adopters in the USA.",
                    ]}
                />
                <WorkExperience
                    title="Robotics Engineer"
                    company="Focus Project Griffin – Aerial Manipulation"
                    date="Sep. 2020 – Jul. 2021"
                    location="Zürich, Switzerland"
                    description=" Focus Griffin is a student project from the Autonomous Systems Lab at ETH Zürich. An Omnidirectional Aerial Manipulation platform was developed and grasping of objects in various orientations could be demonstrated successfully."
                    tasks={[
                        "Writing and integrating the communication interface for the embedded motor drivers.",
                        "Designing, implementing and testing of a controller for the parallel manipulator.",
                    ]}
                />
            </div>
        </section>
    )
}