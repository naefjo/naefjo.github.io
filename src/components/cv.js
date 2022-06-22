import { Tab } from "@headlessui/react"
import { useState } from "react"
import { MdWorkOutline, MdOutlineSchool} from "react-icons/md"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function WorkExperience(props) {
    return (
        <div className="max-w-4xl mx-auto my-10 bg-zinc-100 px-8 py-4 rounded-lg shadow-lg">
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
                {props.tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
            </div> 
            : null}
        </div>
    )
}

function ProfessionalCareer(props) {
    let [work_experience] = useState([
        {
            title: "Robotics Engineer Intern",
            company: "Voliro Airborne Robotics",
            date: "Sep. 2021 – Mar. 2022",
            location: "Zürich, Switzerland",
            description: "Voliro is developing a 360° drone specialized for industrial inspection. The Voliro T drone (flying robot) can be equipped with a variety of Non-Destructive Testing (NDT) sensors, depending on the use-case.",
            tasks: [
                "C++ and Python software development.",
                "Significantly improving the wind robustness of the Voliro T drone through controller tuning and algorithmic improvements.",
                "Developing unit tests.",
                "Testing and validating features in realistic NDT missions.",
                "Product demonstration and pilot training to potential customers and early adopters in the USA.",
            ],
        },
        {
            title: "Robotics Engineer",
            company: "Focus Project Griffin – Aerial Manipulation",
            date: "Sep. 2020 – Jul. 2021",
            location: "Zürich, Switzerland",
            description: " Focus Griffin is a student project from the Autonomous Systems Lab at ETH Zürich. An Omnidirectional Aerial Manipulation platform was developed and grasping of objects in various orientations could be demonstrated successfully.",
            tasks: [
                "Writing and integrating the communication interface for the embedded motor drivers.",
                "Designing, implementing and testing of a controller for the parallel manipulator.",
            ],
        },
    ])

    return (
        <>
            <h1 className="text-center text-4xl sm:text-5xl text-zinc-800 font-medium pt-4 pb-4">Work Experience</h1>
                    
            {work_experience.map(
                experience => (
                    <WorkExperience
                        title={experience.title}
                        company={experience.company}
                        date={experience.date}
                        location={experience.location}
                        description={experience.description}
                        tasks={experience.tasks}
                        />
                )
            )}
        </>
)
}

function Education(props) {
    return (
        <div className="max-w-4xl mx-auto my-10 bg-zinc-100 px-8 py-4 rounded-lg shadow-md">
            <div className="flex justify-center flex-col items-center sm:flex-row space-y-4 sm:space-y-0 pb-4">
                <div className=" flex flex-col">
                    <p className="text-center sm:text-left font-bold text-xl">{props.school}</p>
                    <p className="text-center sm:text-left italic text-lg">{props.degree}</p>
                </div>
                <div className="flex flex-col sm:ml-auto">
                    <p className="text-center sm:text-right text-xl">{props.location}</p>
                    <p className="text-center sm:text-right italic text-lg">{props.date}</p>
                </div>
            </div>
            
            {props.list ? 
            <ul className="px-8 list-disc list-outside">
                {props.list.map(listItem => <li key={listItem}>{listItem}</li>)}
            </ul>
            : null}
        </div>
    )
}

function AcademicCareer(props) {
    let [educational_career] = useState([
        {
            school: "ETH Zürich",
            degree: "MSc. Robotics, Systems and Control",
            location: "Zürich, Switzerland",
            date: "Sep. 2022 – Sep. 2024",
            list: [
                "Supervisor: Prof. Dr. Melanie Zeilinger"
            ],
        },
        {
            school: "ETH Zürich",
            degree: "BSc. Mechanical Engineering",
            location: "Zürich, Switzerland",
            date: "Sep. 2018 – Sep. 2021",
            list: [
                "GPA: 5.59/6.00 – Top 2%",
                "Bachelor Thesis: “Optimization Based Motion Planning on the SE(3) Manifold for an Omnidirectional Aerial Manipulator”, awarded with the final grade 6.0/6.0",
                "Teaching Assistant for the 2nd semester course Mechanics 2: Deformable Solids and Structures by Prof. Dr. Dirk Mohr and for the 3rd semester course Dynamics by Prof. Dr. Dennis Kochmann at the Department of Mechanical and Process Engineering.",
            ],
        },
        {
            school: "Kantonsschule Olten",
            degree: "Bilingual Matura (German & English)",
            location: "Olten, Switzerland",
            date: "Aug. 2013 – Jul. 2017",
            list: [
                "Core Subjects: Biology and Chemistry",
                "Complementary Subject: Computer Science",
                "Board member of the school’s student association (SOKO)",
            ],
        },

    ])

    return (
        <>
            <h1 className="text-center text-4xl sm:text-5xl text-zinc-800 font-medium pt-4 pb-4">Education</h1>
            
            {educational_career.map(
                degree => (
                    <Education
                        school={degree.school}
                        degree={degree.degree}
                        location={degree.location}
                        date={degree.date}
                        list={degree.list}
                    />
                )
            )}
        </>
    )

}


export default function CV() {
    return (
        <section id="cv">
            <div className="text-center px-10 py-20">
                <Tab.Group as="div" className="h-auto sm:h-[60rem] sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-6">
                    <Tab.List className="inline-flex sm:flex flex-row sm:flex-col justify-center space-x-2 sm:space-x-0 sm:space-y-2 rounded-xl bg-zinc-500/20 p-1">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-20 max-w-[10rem] rounded-lg px-2 py-4 text-sm font-medium leading-5 text-white-700',
                                'ring-offset-2 focus:outline-none focus:ring-0',
                                selected
                                    ? 'bg-white shadow ring-offset-amber-500 focus:text-amber-500'
                                    : 'text-gray-900 hover:bg-zinc-200 hover:text-gray-700'
                                )
                            }
                        >
                            <MdWorkOutline className="mx-auto" size={32}/>
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-20 max-w-[10rem] rounded-lg px-2 py-4 text-sm font-medium leading-5 text-white-700',
                                'ring-offset-2 focus:outline-none focus:ring-0',
                                selected
                                    ? 'bg-white shadow ring-offset-amber-500 focus:text-amber-500'
                                    : 'text-gray-900 hover:bg-zinc-200 hover:text-gray-700'
                                )
                            }
                        >
                            <MdOutlineSchool className="mx-auto" size={32}/>
                        </Tab>
                    </Tab.List>

                    <Tab.Panels className="text-left self-start">
                        <Tab.Panel>
                            <ProfessionalCareer />
                        </Tab.Panel>

                        <Tab.Panel>
                            <AcademicCareer />
                        </Tab.Panel>
                    
                    </Tab.Panels>
                </Tab.Group>


                

            </div>
        </section>
    )
}
