import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faTelegram, faXTwitter, faJs, faHtml5, faCss3, faPhp, faPython, faNode, faWebAwesome } from '@fortawesome/free-brands-svg-icons'
import Main from '../components/Main'
import Project from '../components/project'
import Button from '../components/Button'
import { faBlog, faFile, faX } from '@fortawesome/free-solid-svg-icons'
import Skills from '../components/Skills'

function Index() {
    return (
        <div className="flex flex-col lg:flex-row font-m1 justify-center items-center min-h-screen bg-slate-50">
            <div className="flex flex-col justify-center items-center lg:w-1/2 p-8">
                <img className='w-28 rounded-full mb-5' src="https://i.pinimg.com/564x/67/73/88/6773889af5019c050eac31426e81a3eb.jpg" alt="" />
                <div className="font-m1 font-bold text-2xl mb-2">Fauzan Hasyim</div>
                <p className='text-center '>Indonesia | Fullstuck Dev | AI enthusiasts </p>
                <div className='text-2xl flex justify-center mt-3 '>
                    <a href="https://github.com/evandaru" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="www.linkedin.com/in/fauzan-hasyim-808a58217" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/evndaru" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://t.me/evndaru" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faTelegram} />
                    </a>

                </div>
                <div className='flex flex-row'>
                    <Button
                        Icon={faFile}
                        link="#"
                        title="View My CV"
                    />
                    <Button
                        Icon={faWebAwesome}
                        link="#"
                        title="Read my Blog"
                    />
                </div>
                <div>
                </div>
            </div>




            <div className="px-10 flex flex-col lg:w-1/2 lg:px-0">
                <Main skills="Introduction" contain="Hello there! Welcome to our corner of GitHub. We're just a bunch of ordinary folks trying to make our mark in the vast digital landscape. Whether you're a seasoned developer or a curious newcomer, we're glad to have you here!" />
                {/* <Main skills="About Me" contain="I am an individual with a strong interest in the world of technology. Despite my educational background originating from a pesantren (Islamic boarding school), my interest in technology has driven me to explore further in this field. Currently, I am pursuing my education at Duta Bangsa University, where I strive to develop my understanding and skills in various aspects of technology." /> */}
                <Main skills="Education" contain={
                    <div className='flex flex-col gap-5'>

                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between font-medium border-b'><span>Duta Bangsa University</span><span>July 2021 - Present</span></div>
                            <p className='font-thin'>Software Engineering / Informatics Engineering (GPA 3.80)</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between font-medium border-b'><span>Duta Bangsa University</span><span>July 2021 - Present</span></div>
                            <p className='font-thin'>Software Engineering / Informatics Engineering (GPA 3.80)</p>
                        </div>
                    </div>
                } />
                <Main skills="Skills" contain={
                    <div className='flex flex-wrap'>
                        <Skills Icon={faJs} title="JavaScript" />
                        <Skills Icon={faHtml5} title="HTML" />
                        <Skills Icon={faCss3} title="CSS" />
                        <Skills Icon={faPhp} title="Design" />
                        <Skills Icon={faPython} title="Design" />
                        <Skills Icon={faNode} title="Design" />
                        {/* <Skills Icon={} title="Design" /> */}
                    </div>

                } />
                <Main skills="Projects" contain={<div className='flex flex-wrap'>
                    <Project
                        title="Web Perpus"
                        deskripsi="website dibuat saat tugas uas"
                        link="https://github.com/evandaru/restfull-ikan"
                    />

                </div>} />


                <Main skills="" contain="" />




            </div>
        </div>

    )
}

export default Index