import pic from '../resources/IMG_7205_cropped.jpg'


export default function About() {
    return (
        <section id="about" className="bg-gray-700">
            <div className="container max-w-7xl  mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-2 font-medium text-slate-200">
                        Hey! 
                    </h1>
                    <h2 className="title-font sm:text-4xl text-3xl font-medium text-slate-300">
                        I'm <div className="inline italic">Joshua Näf</div>.
                    </h2>
                    <h3 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-slate-200">
                        Nice to meet you! 😄
                    </h3>
                    <p className="mb-8 leading-relaxed text-xl text-slate-400 font-medium text-right">
                        I'm a Robotics Engineer at Voliro and Robotics, Systems and Control master's student at ETH Zürich. 
                        <br />My background is in Mechanical Engineering and I am passionate about control systems and MAVs.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">
                        Get in Touch
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-400 hover:text-white rounded text-lg">
                        Check out my projects
                        </a>
                    </div>
                </div>
                <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-lg"
                        src={pic}
                        alt="This is me :)"
                    />
                </div>
            </div>
        </section>
    );
}