import finclassLogo from '../assets/finclass-logo.svg'
import instagram from '../assets/socials/instagram.svg'
import twitter from '../assets/socials/twitter.svg'
import linkedin from '../assets/socials/linkedin.svg'
import pinterest from '../assets/socials/pinterest.svg'
import tiktok from '../assets/socials/tiktok.svg'
import telegram from '../assets/socials/telegram.svg'
import youtube from '../assets/socials/youtube.svg'
import googlePlay from '../assets/google-play.png'
import appStore from '../assets/app-store.png'

import arrowCircleDown from '../assets/arrow-circle-down.svg'

interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer className="max-w-[100vw] bg-black">
      <div className="pt-14 md:pt-44 pb-14 md:pb-20 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-footerColumns gap-x-4 md:h-[366px]">
          
          
        </div>
      </div>
      <div className="py-8 border-t border-t-[#ffffff2e] h-0 w-full" />
      <div className="pb-14 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <span className="text-white/50">
          {new Date().getFullYear()} © All rights reserved - LivewirExperts
        </span>
        <div className="flex items-center gap-x-3 mt-3">
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={arrowCircleDown}
            alt="backToTop"
            className="rotate-180 cursor-pointer"
          />
          <span className="text-white/50 font-light">Back to top</span>
        </div>
      </div>
    </footer>
  )
}
