import { Tab } from '@headlessui/react'
import { useState } from 'react'
import bachelor_thesis_pdf from "../resources/bt_motion_planning.pdf"
import griffin_final_report_pdf from "../resources/griffin_final_report.pdf"
import code_pic from "../resources/code.jpg"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Projects() {
    return (
        <section id="projects">
            <h1 className="text-center text-4xl sm:text-5xl text-zinc-800 font-medium pt-4 pb-4">Projects</h1>
              <div className='h-[60rem]'>
                <Tabs />
              </div>
        </section>
    )
}

function Tabs() {
  let [projects] = useState({
    "Focus Project":
      {
        title: "Focus Project: Griffin – Aerial Manipulation",
        skills: "C++, Python, ROS, LaTeX",
        description: "Micro aerial vehicles and their abilities have rapidly evolved in recent years. The ability to interact with their environment, known as aerial manipulation, is a par- ticularly new field of drone research. Most existing solutions of aerial manipulators utilize commercially available multirotors as a base platform, which are then suit- ably modified for manipulation. In contrast, project Griffin aimed to develop a fully integrated aerial manipulator design from scratch. It features a linear delta arm built into the structural part of the flying platform. To achieve omnidirectionality, four tiltable propeller groups were utilized. A key idea of using a linear delta ma- nipulator is the ability of the robot manipulator to compensate positional errors of the platform. During the project, the concept was successfully verified by grasping and releasing an object from above and from the side and demonstrating omnidi- rectional flight. The position of the end-effector was shown to be more accurate compared to a hypothetical fixed end-effector on the platform. The final result is a full proof of concept of an integrated omnidirectional aerial manipulator.",
        pdf: griffin_final_report_pdf
      },
      "Bachelor Thesis":
      {
        title: "Bachelor Thesis: \"Optimization Based Motion Planning on the SE(3) Manifold for an Omnidirectional Aerial Manipulator\"",
        skills: "HTML, React.js, Tailwind CSS",
        description: "In this bachelor thesis, a motion planner for the omnidirectional aerial manipulator PrisMAV is implemented. The optimization-based planner builds on the Covariant Hamiltonian Optimization for Motion Planning (CHOMP) algorithm to enable motion planning for omnidirectional micro aerial vehicles (OMAVs). CHOMP enables the computation of smooth and collision-free trajectories through the optimization of an initial (potentially infeasible) trajectory, such as a straight line path. An additional cost function on the orientation of PrisMAV was designed to encourage flight in energy efficient flight modes. \n The planner is tested and verified in simulation under different scenarios where rapidly-exploring random trees (RRT) serve as a performance benchmark. We observe clearly longer flight periods spent in favourable orientations for trajectories produced by our planner and a noticeable decrease in trajectory length compared to RRT.",
        pdf: bachelor_thesis_pdf
      },
    "Portfolio Website":
      {
        title: "This Portfolio Website",
        skills: "C++, Python, ROS, LaTeX",
        description: "To improve my programming skills and to learn some web development, I decided to showcase my work eperience and my past projects on a portfolio website. The website is built using React.js and styled using Tailwind CSS.",
        img: code_pic
      },
  })

  return (
    <div className="py-16 text-center sm:px-0">
      <Tab.Group>
        <Tab.List className="inline-flex flex-row sm:space-x-2 rounded-xl bg-zinc-500/20 p-1">
          {Object.keys(projects).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full max-w-[10rem] rounded-lg px-2 py-4 text-sm font-medium leading-5 text-white-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-500 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-900 hover:bg-zinc-200 hover:text-gray-700'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2 mx-auto text-left">
          
          {
            Object.values(projects).map(
              (project) => (
                <MyTabPanel 
                  title={project.title}
                  skills={project.skills}
                  description={project.description}
                  img={project.img}
                  pdf={project.pdf}

                />
              )
            )
          }
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

function MyTabPanel(props) {
  return (
    <Tab.Panel
      className="max-w-4xl md:max-w-7xl mx-auto bg-zinc-100 px-8 py-4 rounded-lg shadow-lg"
    >
      <h2 className="font-bold text-2xl mx-4">{props.title}</h2>
      <div className="flex flex-col  sm:flex-row justify-between mt-4">
        <div className='pb-10 sm:pb-0 sm:pr-10 md:pr-20'>
          <h3 className='font-bold text-lg'>Skills used:</h3>
          <p>{props.skills}</p>
          <h3 className='font-bold text-lg mt-4'></h3>
          <p>
            {props.description}
          </p>
        </div>
        <div className='mx-auto sm:mx-0'>
          {props.img ?
          <img
            className="object-cover object-center rounded-lg"
            src={props.img}
          />
          : null}
          {props.pdf ?
          <iframe
            title="Bachelor Thesis pdf"
            className='h-[40rem] w-auto sm:w-[30rem]'
            src={props.pdf} 
          />
          : null}
        </div>
      </div>
    </Tab.Panel>       
  )
}