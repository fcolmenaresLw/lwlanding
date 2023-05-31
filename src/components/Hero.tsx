import { Navbar } from './integrate/Navbar'
import heroImg from '../assets/LivewirExpertsVerde.png'
import thunderLightning from '../assets/thunder-lightning.svg'
import arrowCircleDown from '../assets/arrow-circle-down.svg'
import bgWorldsBest from '../assets/bg-worlds-best.png'
import { Sticky } from './integrate/Sticky'
import { motion } from 'framer-motion'
import { headingAnimation, bannerImageAnimation } from '../utils/animations'
import { Button } from './integrate/Button'

interface Props {}

export const Hero = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <Navbar />
      <Sticky />
      <div className={style.contentWrapper}>
        <div className={style.contentContainer}>
          <img src={bgWorldsBest} className={style.backgroundImg} />
          <div className={style.headingContainer}>
            <span className={style.spanFloatTop}>
            IT Management & Governance
              <img
                src={thunderLightning}
                alt="thunder-lightning/icon"
                className={style.thunderIcon}
              />
            </span>
            <motion.h1
              {...style.handleHeading().headingAnimation}
              className={style.handleHeading().className}
            >
              Partners (YOU) receive in depth consultations to help you understand and utilize the endless capabilities of the platforms.
            </motion.h1>
            <p className={style.paragraph}>
            Our experienced team will be there to assist you with setting up, and optimizing your platform so you won’t be faced with any avoidable road blocks.{' '}
            </p>
        
          </div>
          <div className={style.bannerImageContainer}>
            <motion.img
              {...style.handleBannerImage().bannerImageAnimation}
              src={style.handleBannerImage().src}
              className={style.handleBannerImage().className}
              alt={style.handleBannerImage().alt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] h-fit overflow-hidden bg-black`,
  contentWrapper: `pt-16 md:pt-28 max-w-screen-xl w-full mx-auto px-4`,
  contentContainer: `pt-24 lg:pt-32 pb-28 md:pb-80 lg:pb-52 relative flex flex-col lg:flex-row items-center justify-between`,
  backgroundImg: `absolute top-4 md:top-8 z-0  right-0 lg:-right-0 w-full md:max-w-[680px] xl:max-w-[780px]`,
  headingContainer: `w-full max-w-[400px] md:max-w-none lg:w-[50%] text-center md:text-left mt-20 md:mt-0 z-10`,
  spanFloatTop: `textGradient tracking-widest text-sm mx-auto md:mx-0 w-fit mb-2 flex items-center gap-x-2 uppercase font-semibold`,
  thunderIcon: `w-5 -mt-[2px]`,
  handleHeading: () => {
    return {
      headingAnimation,
      className: `text-3xl text-justify md:text-3l w-full md:max-w-[510px] lg:max-w-[458px] mb-8 !leading-[110%] tracking-wide font-bold`,
    }
  },
  paragraph: `!leading-[23.2px] md:text-lg mx-auto md:mx-0 w-full md:max-w-[469px] mb-4 font-light text-[#B4B4B4]`,
  spanPlanContainer: `block text-sm mt-4 text-[#86888D] font-semibold`,
  spanPlanStrong: `text-white text-base`,
  spanFindOutHow: `text-sm w-fit mx-auto md:mx-0 text-[#86888D] flex items-center gap-x-2 mt-8`,
  bannerImageContainer: `w-[50%] flex items-center relative z-10`,
  handleBannerImage: () => {
    return {
      bannerImageAnimation,
      src: heroImg,
      className: `w-[250px] mt:10rem; hidden md:block absolute -top-4 lg:-top-150 md:ml-[250px] lg:ml-[100px] xxl:ml-[130px]`,
      alt: 'hero-img/png'
    }
  },
}
