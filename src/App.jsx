import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="flex flex-col lg:flex-row font-m1 justify-center items-center min-h-screen bg-slate-50">
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-8">
        <img className='w-28 rounded-full mb-5' src="https://i.pinimg.com/564x/67/73/88/6773889af5019c050eac31426e81a3eb.jpg" alt="" />
        <div className="font-m1 font-bold text-3xl mb-2">Fauzan Hasyim</div>
        <div>Indonesia | Fullstuck Dev | AI enthusiasts </div>
        <div className='text-3xl flex justify-center mt-3 '>
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
        <div className='mt-56'>Webnya masih tahap BETA, Jadi Jangan Baper dulu🤞</div>
      </div>
      <div className="flex flex-col  lg:w-1/2">
        <div className='py-5 lg:p-5'>
          <div className='font-bold text-2xl lg:text-3xl mb-2'>About Me</div>
          <div className='text-sm lg:text-base'>Saya adalah seorang individu yang memiliki ketertarikan yang kuat dalam dunia teknologi. Meskipun latar belakang pendidikan saya berasal dari pondok pesantren, minat saya terhadap teknologi telah mendorong saya untuk mengeksplorasi lebih jauh dalam bidang ini. Saat ini, saya sedang menempuh pendidikan di Universitas Duta Bangsa, di mana saya berusaha untuk mengembangkan pemahaman dan keterampilan saya dalam berbagai aspek teknologi.</div>
        </div>
        <div className='py-5 lg:p-5'>
          <div className='font-bold text-2xl lg:text-3xl mb-2'>Experience</div>
          <div className='text-sm lg:text-base'>Pengabdian | Jadi designernya Binaqu | Jadi Teknikal pt pustaka bengawan | pernah kkn juga | dan lain lain malas nyebutinnya aowkowako</div>
        </div>
        <div className='py-5 lg:p-5'>
          <div className='font-bold text-2xl lg:text-3xl mb-2'>Skills</div>
          <div className='text-sm lg:text-base'>Turu | Madang | ngoding dikit-dikit (bismillah cepet jago) | design | UI UX | dan lain lain malas juga nyebutinnya waokowoaw</div>
        </div>
        <div className='py-5 lg:p-5'>
          <div className='font-bold text-2xl lg:text-3xl mb-2'>Projects</div>
          <div className='text-sm lg:text-base'>Coming soon</div>
        </div>
      </div>
    </div>
  )
}

export default App
