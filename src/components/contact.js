import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi"
import {FaTelegramPlane} from "react-icons/fa"

export default function Contact() {
    return (
        <section id="contact" className="bg-slate-600">
            <div className="px-10 py-10">
                <h1 className="text-center text-4xl sm:text-5xl text-zinc-50 font-medium mb-10">Get in Touch!</h1>
                <div className="max-w-md sm:max-w-4xl mx-auto">
                    <div className="flex sm:items-center flex-col sm:flex-row justify-between pb-4">
                        <IconLink
                            link="https://github.com/naefjo"
                            icon={<FiGithub size={30}/>}
                            />
                        <IconLink
                            link="https://www.linkedin.com/in/joshua-naef/"
                            icon={<FiLinkedin size={30}/>}
                        />
                    </div>
                    <div className="flex sm:items-center flex-col sm:flex-row justify-between pb-4">
                        <IconLink
                            link="mailto:naefjo@ethz.ch"
                            alt_text="naefjo@ethz.ch"
                            icon={<FiMail size={30}/>}
                        />
                        
                    <IconLink
                            link="https://t.me/safarijesh/"
                            alt_text="Telegram"
                            icon={<FaTelegramPlane size={30}/>}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function IconLink(props) {
    return (
        <a 
            className="flex-1 text-slate-200 italic hover:text-slate-50"
            href={props.link}
            target="_blank"
        >
            <div className="inline-flex space-x-2 items-center">
                {props.icon}
                <div className="inline font-medium">
                    {
                        props.alt_text ?
                        props.alt_text :
                        props.link
                    }
                </div>
            </div>
        </a>
    )
}