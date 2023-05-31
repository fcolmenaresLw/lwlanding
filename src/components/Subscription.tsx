import appBannerDesktop from '../assets/LogoOfficeWall.png'
import appBannerMobile from '../assets/app-banner.png'
import plusPlayerIcon from '../assets/app/plus-player-icon.svg'

interface Props {}

export const Subscription = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.gridContainer}>
          <div className={style.firstColumn}>
            <img src={appBannerMobile} className={style.mobileImg} />
            <img src={appBannerDesktop} className={style.desktopImg} />
          </div>
          <div className={style.secondColumn}>
            <div className={style.contentContainer}>
              {/* <img src={plusPlayerIcon} className={style.icon} /> */}
              <h2 className={style.heading}>
                <strong className={style.txtGradient}>Contact</strong>
                <br /> Us
              </h2>
              <p className={style.paragraph}>
              We’re here to help you simplify IT management, whether you are part of an IT team continually asked to do more with existing budget. We provide it solutions that help you take the complexities out of IT.
              </p>
              <p className={style.paragraph}>
              Speak with one of our solution engineers and let’s explore how Livewirexperts can help you intelligently solve your technology challenges.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] relative overflow-visible bg-black pb-[70px] border-b border-b-[#ffffff2e]`,
  contentWrapper: `pt-28 mdd:pt-64 max-w-screen-xl w-full mx-auto px-4 md:px-4`,
  gridContainer: `grid grid-cols-1 mdd:grid-cols-2`,
  firstColumn: `col-span-1`,
  mobileImg: `block mdd:hidden mx-auto w-full max-w-[500px]`,
  desktopImg: `w-full hidden mdd:block mdd:max-w-[500px] lg:max-w-[612px] z-10 absolute -bottom-[72px] lg:-bottom-[88px]`,
  secondColumn: `col-span-1 mt-10 mdd:mt-0 flex items-center justify-center`,
  contentContainer: `text-center mdd:ml-32 mdd:mb-11 mdd:text-left mdd:w-[310px] mmd:w-[410px] xl:w-[450px]`,
  icon: `w-8 h-8 mx-auto mdd:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  txtGradient: `textGradient`,
  paragraph: `inline-block text-justify text-white/80 text-sm md:mb-0 mt-4 w-[90%] md:text-xl !leading-snug`,
  spanContainer: `mt-6 mb-4 inline-block`,
  from: `inline-block text-white/80 font-light`,
  priceContainer: `inline-block text-lg`,
  price: `text-2xl font-semibold`,
  buttonContainer: `relative cursor-pointer hover:ring-1  active:scale-95 transition-all duration-300 hover:ring-[#8bbe1a] w-full max-w-[280px] inline-flex items-center justify-center tracking-wider px-6 py-3 overflow-hidden font-semibold text-white rounded-md group shadow-lg shadow-white/10`,
  bgOverylay: `absolute inset-0 w-full h-full opacity-1 group-hover:opacity-0 transition duration-300 ease-out opacity-1 bg-gradient-to-br from-[#8bbe1a] to-[8bbe1a]`,
  textContent: `relative group-hover:text-[#8bbe1a]`,
}
