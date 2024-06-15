import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faTelegram, faXTwitter, faJs, faHtml5, faCss3, faPhp, faPython, faNode, faWebAwesome, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import Main from '../components/Main'
import Project from '../components/project'
import Button from '../components/Button'
import { faArrowRight, faBlog, faEnvelope, faFile, faMailReply, faX } from '@fortawesome/free-solid-svg-icons'
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
import Medsos from '../components/Medsos'
import Photo from '/photo.jpg'
import Tag from '../components/Tag'

function Index() {
    return (
        <div className="flex flex-col lg:flex-row font-m1 justify-center items-center min-h-screen bg-slate-50">
            <div className="flex flex-col justify-center items-center lg:w-1/2 p-8">
                <img className='w-28 rounded-full mb-5'
                    // src="https://i.pinimg.com/564x/67/73/88/6773889af5019c050eac31426e81a3eb.jpg"
                    // src="https://drive.google.com/uc?id=10-riQdLRFW_Wkouzp-KdUcGWsGAIpr89" alt="Description of the image"
                    // src='https://drive.usercontent.google.com/download?id=10-riQdLRFW_Wkouzp-KdUcGWsGAIpr89&authuser=0'
                    src={Photo}
                />
                <div className="font-m1 font-bold text-2xl text-center mb-2">Fauzan Hasyim Muthohhar</div>
                <p className='text-center '>🌐 Indonesia | 👩‍💻 Junior Software Engineer </p>
                <div className='text-2xl flex justify-center mt-1 '>
                    <Medsos Icon={faGithub} title="Github" link="https://github.com/evandaru" />
                    <Medsos Icon={faLinkedin} title="Linkedin" link="https://www.linkedin.com/in/fauzan-hasyim-808a58217/" />
                    <Medsos Icon={faEnvelope} title="Email" link="mailto:fauzanhasyimm@gmail.com" />
                    <Medsos Icon={faFile} title="Read CV" link="https://docs.google.com/document/d/11XI9lp69a66evs3m0hHtsm_S_LnA8ay1J0I6m1uygzc/edit?usp=sharing" />
                </div>
                <div className='flex flex-row max-sm:flex-col'>
                    {/* <Button
                        Icon={faFile}
                        link="https://docs.google.com/document/d/11XI9lp69a66evs3m0hHtsm_S_LnA8ay1J0I6m1uygzc/edit?usp=sharing"
                        title="Curriculum Vitae"
                    /> */}
                    {/* <Button 
                    Icon={faWebAwesome} 
                    link="/blog" 
                    title="My Blog"
                    /> */}
                </div>
                <div>
                </div>
            </div>




            <div className="px-10 flex flex-col lg:w-1/2 lg:px-0">
                <Main skills="Introduction" contain="Hi, I'm Fauzan Hasyim, a junior web developer with a passion for transforming ideas into visually stunning and functional websites. I thrive on writing clean code and creating pixel-perfect designs. Let's collaborate and create something amazing together!" />
                {/* <Main skills="About Me" contain="I am an individual with a strong interest in the world of technology. Despite my educational background originating from a pesantren (Islamic boarding school), my interest in technology has driven me to explore further in this field. Currently, I am pursuing my education at Duta Bangsa University, where I strive to develop my understanding and skills in various aspects of technology." /> */}
                <Main skills="Education" contain={
                    <div className='flex flex-col gap-5'>

                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between font-medium border-b'><span>Duta Bangsa University</span><span>July 2021 - Present</span></div>
                            <p className='font-thin'> Computer Science / Informatics Engineering (GPA 3.80)</p>
                        </div>
                    </div>
                } />
                <Main skills="Skills" contain={
                    <div className='flex flex-wrap max-w-96'>
                        <Skills Icon={Html} title="HTML" />
                        <Skills Icon={Css} title="CSS" />
                        <Skills Icon={js} title="JavaScript" />
                        <Skills Icon={php} title="PHP" />
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
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a target="_blank" href="https://github.com/evandaru">Click here to more</a>
                    </div>
                    <Project
                        title="Perpus RPL"
                        shortDescription="Creating a website for ..."
                        fullDescription="Creating a website for managing library books using Laravel and SQL database. This website has two types of users, admin and user, with different features according to their roles."
                        link="https://github.com/evandaru/perpusrpl"
                        tag={<div className='flex gap-1 pt-2 flex-row'>
                            <Tag status="Incompleted" />
                            <Tag status="php" />
                            <Tag status="Open Source" />
                            <Tag status="MySql" />
                        </div>
                        }

                    />
                    <Project
                        title="Lele Bot"
                        shortDescription="Telegram Bot equipped with ..."
                        fullDescription="Telegram Bot equipped with CRUD features (Create, Read, Update, Delete). Integrated with Groq AI and supports features to download videos from YouTube."
                        link="https://github.com/evandaru/bottelecrud"
                        tag={<div className='flex gap-1 pt-2 flex-row'>
                            <Tag status="Incompleted" />
                            <Tag status="Javascript" />
                            <Tag status="Telegram" />
                            <Tag status="LowDB" />
                        </div>
                        }

                    />
                    <Project
                        title="Donation Website"
                        shortDescription="Building a website for ..."
                        fullDescription="Building a website for managing donations by displaying financial information collected during Ramadan."
                        link="https://github.com/evandaru/donatur"
                        tag={<div className='flex gap-1 pt-2 flex-row'>
                            <Tag status="Incompleted" />
                            <Tag status="Javascript" />
                            <Tag status="vite Js" />
                            <Tag status="React JS" />
                            <Tag status="Notion" />
                        </div>
                        }
                    />
                    <Project
                        title="Tahsin Website"
                        shortDescription="Creating a website focused on ..."
                        fullDescription="Creating a website focused on the Landing page and featuring registration, integrated using spreadsheets database."
                        link="https://github.com/evandaru/quranfirst-tapilaravel"
                        tag={<div className='flex gap-1 pt-2 flex-row'>
                            <Tag status="Incompleted" />
                            <Tag status="Laravel" />
                            <Tag status="Spreadsheet" />
                            <Tag status="IslamicWeb" />
                        </div>
                        }

                    />

                </div>} />


                {/* <Main skills="" contain="" /> */}




            </div>
        </div>

    )
}

export default Index