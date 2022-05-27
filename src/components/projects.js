import { Tab } from '@headlessui/react'
import { useState } from 'react'
import bachelor_thesis_pdf from "../resources/bt_motion_planning.pdf"
import griffin_final_report_pdf from "../resources/griffin_final_report.pdf"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Projects() {
    return (
        <section id="projects">
            <h1 className="text-center text-4xl sm:text-5xl text-zinc-800 font-medium pt-4 pb-4">Projects</h1>
                <Tabs />
        </section>
    )
}

function Tabs() {
  let [categories] = useState({
    "Focus Project": [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "Bachelor Thesis": [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    "This Website": [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="py-16 text-center sm:px-0">
      <Tab.Group>
        <Tab.List className="inline-flex flex-col sm:flex-row sm:space-x-2 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full max-w-[10rem] rounded-lg px-2 py-4 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2 max-w-5xl mx-auto text-left">
          <Tab.Panel
            className="max-w-4xl md:max-w-7xl mx-auto bg-zinc-100 px-8 py-4 rounded-lg shadow-lg"
          >
            <h2 className="font-bold text-2xl mx-4">Focus Project: Griffin – Aerial Manipulation</h2>
            <div className="flex flex-col  sm:flex-row justify-between mt-4">
              <div className='pr-6'>
                <h3 className='font-bold text-lg'>Skills used:</h3>
                <p>C++, Python, ROS, LaTeX</p>
                <h3 className='font-bold text-lg mt-4'> Abstract:</h3>
                <p>
                  Micro aerial vehicles and their abilities have rapidly evolved in recent years. The ability to interact with their environment, known as aerial manipulation, is a par- ticularly new field of drone research. Most existing solutions of aerial manipulators utilize commercially available multirotors as a base platform, which are then suit- ably modified for manipulation. In contrast, project Griffin aimed to develop a fully integrated aerial manipulator design from scratch. It features a linear delta arm built into the structural part of the flying platform. To achieve omnidirectionality, four tiltable propeller groups were utilized. A key idea of using a linear delta ma- nipulator is the ability of the robot manipulator to compensate positional errors of the platform. During the project, the concept was successfully verified by grasping and releasing an object from above and from the side and demonstrating omnidi- rectional flight. The position of the end-effector was shown to be more accurate compared to a hypothetical fixed end-effector on the platform. The final result is a full proof of concept of an integrated omnidirectional aerial manipulator.
                </p>
              </div>
              <div className='mx-auto sm:mx-0'>
                <iframe
                  className='h-[40rem] w-[30rem]'
                  src={griffin_final_report_pdf} />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel
            className="max-w-4xl md:max-w-7xl mx-auto bg-zinc-100 px-8 py-4 rounded-lg shadow-lg"
          >
            <h2 className="font-bold text-2xl mx-4">Bachelor Thesis: "Optimization Based Motion Planning on the SE(3) Manifold for an Omnidirectional Aerial Manipulator"</h2>
            <div className="flex flex-col  sm:flex-row justify-between mt-4">
              <div className='pr-6'>
                <h3 className='font-bold text-lg'>Skills used:</h3>
                <p>C++, Python, ROS, LaTeX</p>
                <h3 className='font-bold text-lg mt-4'> Abstract:</h3>
                <p>
                  In this bachelor thesis, a motion planner for the omnidirectional aerial manipulator PrisMAV is implemented. The optimization-based planner builds on the Covariant Hamiltonian Optimization for Motion Planning (CHOMP) algorithm to enable motion planning for omnidirectional micro aerial vehicles (OMAVs). CHOMP enables the computation of smooth and collision-free trajectories through the optimization of an initial (potentially infeasible) trajectory, such as a straight line path. An additional cost function on the orientation of PrisMAV was designed to encourage flight in energy efficient flight modes.
                  The planner is tested and verified in simulation under different scenarios where rapidly-exploring random trees (RRT) serve as a performance benchmark. We observe clearly longer flight periods spent in favourable orientations for trajectories produced by our planner and a noticeable decrease in trajectory length compared to RRT.
                </p>
              </div>
              <div className='mx-auto sm:mx-0'>
                <iframe
                  className='h-[40rem] w-[30rem]'
                  src={bachelor_thesis_pdf} />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel
            className="max-w-4xl md:max-w-7xl mx-auto bg-zinc-100 px-8 py-4 rounded-lg shadow-lg"
          >
            
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
