import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import Main from '../components/Main'
import Project from '../components/project'

function Index() {
    return (
        <div className="flex flex-col lg:flex-row font-m1 justify-center items-center min-h-screen bg-slate-50">
            <div className="flex flex-col justify-center items-center lg:w-1/2 p-8">
                <img className='w-28 rounded-full mb-5' src="https://i.pinimg.com/564x/67/73/88/6773889af5019c050eac31426e81a3eb.jpg" alt="" />
                <div className="font-m1 font-bold text-2xl mb-2">Fauzan Hasyim</div>
                <p className='text-center '>Indonesia | Fullstuck Dev | AI enthusiasts </p>
                <div className='text-2xl flex justify-center mt-3 '>
                    <a href="https://github.com/evandaru" className='mx-2 lg:mx-4'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="www.linkedin.com/in/fauzan-hasyim-808a58217" className='mx-2 lg:mx-4'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/evndaru" className='mx-2 lg:mx-4'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://t.me/evndaru" className='mx-2 lg:mx-4'>
                        <FontAwesomeIcon icon={faTelegram} />
                    </a>
                </div>
            </div>




            <div className="px-10 flex flex-col lg:w-1/2 lg:px-0">
                <Main skills="Introduction" contain="Hello there! Welcome to our corner of GitHub. We're just a bunch of ordinary folks trying to make our mark in the vast digital landscape. Whether you're a seasoned developer or a curious newcomer, we're glad to have you here!" />
                <Main skills="About Me" contain="I am an individual with a strong interest in the world of technology. Despite my educational background originating from a pesantren (Islamic boarding school), my interest in technology has driven me to explore further in this field. Currently, I am pursuing my education at Duta Bangsa University, where I strive to develop my understanding and skills in various aspects of technology." />
                <Main skills="Experience" contain="Pengabdian | Jadi designernya Binaqu | Jadi Teknikal pt pustaka bengawan | pernah kkn juga | dan lain lain malas nyebutinnya aowkowako" />
                <Main skills="Skills" contain="Turu | Madang | ngoding dikit-dikit (bismillah cepet jago) | design | UI UX | dan lain lain malas juga nyebutinnya waokowoaw" />
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