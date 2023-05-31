import appIcon from '../assets/app/app-icon.svg'
import googlePlayDownload from '../assets/google-play-download.png'
import appStoreDownload from '../assets/app-store-download.png'
import { appList } from '../data'
import { AppListItem } from './integrate/AppListItem'

interface Props {}

export const AppMobile = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.gridContainer}>
          <div className={style.headingContainer}>
            <img src={appIcon} className={style.appIcon} />
            <h2 className={style.heading}>
              <strong className={style.strong}>Comprehensive</strong> Managed{' '}
              <br className="md:hidden" /> IT Services
            </h2>
            <span className={style.span}>
            If it ain’t broke, don’t fix it. True or false? When it comes to business IT: false. Savvy businesses know that smart IT management not only prevents costly failures, it also protects profitability. Yes, we provide our managed IT clients with IT support “when bad things happen.” But with comprehensive managed IT services, we can keep bad things—like system crashes, data loss and downtime—from happening in the first place. Proactively create a stable, secure, managed IT environment for your business. With our team of With flexible IT support options, we can offer custom solutions to fit any size business. IT specialists handling your IT strategy—including management, maintenance and support for all your IT needs—you can concentrate on building your business.
            </span>
          </div>
          <div className={style.appListWrapper}>
            <ul>
              {appList.map((item) => (
                <AppListItem key={item.title} {...item} />
              ))}
            </ul>
            {/* <div className={style.downloadsContainer}>
              <img
                src={appStoreDownload}
                alt="download via App Store"
                className={style.downloadImg}
              />
              <img
                src={googlePlayDownload}
                alt="download via Google Play"
                className={style.downloadImg}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-20 md:pt-44 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  gridContainer: `grid md:grid-cols-2`,
  headingContainer: `text-center md:text-left col-span-1 md:w-[310px] mmd:w-[410px] xl:w-[510px]`,
  appIcon: `w-8 h-8 mx-auto md:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  strong: `textGradient`,
  span: `inline-block text-white/80 text-justify text-sm mb-14 md:mb-0 mt-2 w-[95%] md:text-xl !leading-snug`,
  appListWrapper: `h-fit text-center mx-auto md:mx-0 w-full max-w-[400px] md:max-w-none md:my-auto`,
  downloadsContainer: `flex mdd:-ml-5 flex-col md:flex-row items-center gap-y-8 gap-x-4 mt-10`,
  downloadImg: `w-[190px] hover:brightness-110 cursor-pointer`,
}
