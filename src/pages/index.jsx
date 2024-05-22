import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faTelegram, faXTwitter, faJs, faHtml5, faCss3, faPhp, faPython, faNode, faWebAwesome, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import Main from '../components/Main'
import Project from '../components/project'
import Button from '../components/Button'
import { faBlog, faEnvelope, faFile, faMailReply, faX } from '@fortawesome/free-solid-svg-icons'
import Skills from '../components/Skills'
import { Tooltip } from 'react-tooltip'
import '../App.css'

import Html from '/icon/html.svg'
import Css from '/icon/css.svg'
import js from '/icon/javascript.svg'
import php from '/icon/php.svg'
import tailwind from '/icon/tailwindcss.svg'
import nodejs from '/icon/nodejs.svg'
import python from '/icon/python.svg'
import vite from '/icon/vitest.svg'
import git from '/icon/git.svg'
import figma from '/icon/figma.svg'
import codeigniter from '/icon/codeigniter.svg'
import laravel from '/icon/laravel.svg'
import reactlogo from '/icon/react.svg'
import reactnativelogo from '/icon/svgr.svg'

function Index() {
    return (
        <div className="flex flex-col lg:flex-row font-m1 justify-center items-center min-h-screen bg-slate-50">
            <div className="flex flex-col justify-center items-center lg:w-1/2 p-8">
                <img className='w-28 rounded-full mb-5' src="https://i.pinimg.com/564x/67/73/88/6773889af5019c050eac31426e81a3eb.jpg" alt="" />
                <div className="font-m1 font-bold text-2xl mb-2">Fauzan Hasyim</div>
                <p className='text-center '>Indonesia | Fullstuck Dev | AI enthusiasts </p>
                <div className='text-2xl flex justify-center mt-3 '>
                    <a href="https://github.com/evandaru" target="_blank" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/fauzan-hasyim-808a58217" target="_blank" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:fauzanhasyimm@gmail.com" target="_blank" className='mx-2 lg:mx-4  text-gray-500'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>

                </div>
                <div className='flex flex-row'>
                    <Button
                        Icon={faFile}
                        link="/readcv"
                        title="Curriculum Vitae"
                    />
                    <Button
                        Icon={faWebAwesome}
                        link="/blog"
                        title="My Blog"
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
                    </div>
                } />
                <Main skills="Skills" contain={
                    <div className='flex flex-wrap max-w-96'>
                        <Skills Icon={Html} title="HTML" />
                        <Skills Icon={Css} title="CSS" />
                        <Skills Icon={js} title="JavaScript" />
                        <Skills Icon={php} title="PHP" />
                        <Skills Icon={python} title="Python" />
                        <Skills Icon={tailwind} title="Tailwind" />
                        <Skills Icon={git} title="Git" />
                        <Skills Icon={vite} title="vite" />
                        <Skills Icon={reactlogo} title="React Js" />
                        <Skills Icon={reactnativelogo} title="React Native" />
                        <Skills Icon={nodejs} title="Node JS" />
                        <Skills Icon={laravel} title="Laravel" />
                        <Skills Icon={codeigniter} title="Codeigniter" />
                        <Skills Icon={figma} title="Figma" />
                        {/* <Skills Icon={} title="Design" /> */}
                        <Tooltip id="my-tooltip" className="style-tooltip-hik" />
                    </div>

                } />
                <Main skills="Projects" contain={<div className='flex flex-wrap'>
                    <Project
                        title="Web Perpus"
                        deskripsi="website dibuat saat tugas uas"
                        link="https://github.com/evandaru/restfull-ikan"
                    />

                </div>} />


                {/* <Main skills="" contain="" /> */}




            </div>
        </div>

    )
}

export default Index