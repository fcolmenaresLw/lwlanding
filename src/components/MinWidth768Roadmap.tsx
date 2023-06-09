import formationIcon from '../assets/roadmap/formation-icon.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'
import alignLeft from '../assets/roadmap/align-left.svg'
import alignCenter from '../assets/roadmap/align-center.svg'
import alignRight from '../assets/roadmap/align-right.svg'
import { roadmapList } from '../data'
import { MinWidth768RoadmapListItem } from './integrate/MinWidth768RoadmapListItem'
import { useState } from 'react'
import { MinWidth768RoadmapButton } from './integrate/MinWidth768RoadmapButton'
import { MinWidth768SkeletonRoadmap } from './integrate/MinWidth768SkeletonRoadmap'

interface Props {}

export type Routes = 'beginner' | 'intermediary' | 'advanced'

export const MinWidth768Roadmap = (props: Props) => {
  const [activeRoute, setActiveRoute] = useState<Routes>('beginner')

  const routeButtonsProps = [
    {
      activeRoute,
      setActiveRoute,
      icon: alignLeft,
      title: 'Delivery Services',
      route: 'beginner' as 'beginner',
    },
    {
      activeRoute,
      setActiveRoute,
      icon: alignCenter,
      title: 'Paises',
      route: 'intermediary' as 'intermediary',
    },
    // {
    //   activeRoute,
    //   setActiveRoute,
    //   icon: alignRight,
    //   title: 'Automations',
    //   route: 'advanced' as 'advanced',
    // },
  ]

  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.headingContainer}>
          <img
            src={formationIcon}
            alt="formation/svg"
            className={style.formationIcon}
          />
          <h2 className={style.heading}>
            <strong className={style.textGradient}>Comprehensive </strong>
            Managed IT <br /> Services
          </h2>
          <span className={style.span}>
          If it ain’t broke, don’t fix it. True or false? When it comes to business IT: false.

Savvy businesses know that smart IT management not only prevents costly failures, it also protects profitability. Yes, we provide our managed IT clients with IT support “when bad things happen.” But with comprehensive managed IT services, we can keep bad things—like system crashes, data loss and downtime—from happening in the first place. Proactively create a stable, secure, managed IT environment for your business. With our team of With flexible IT support options, we can offer custom solutions to fit any size business.

IT specialists handling your IT strategy—including management, maintenance and support for all your IT needs—you can concentrate on building your business.
          </span>
        </div>
        <div className={style.roadmapWrapper}>
          <div className={style.accountPlaceholderIconContainer}>
            <img
              src={accountPlaceholder}
              alt="account-placeholder/svg"
              className={style.accountPlaceholderIcon}
            />
          </div>
          <div className={style.ghostContainersWrapper}>
            <div className={style.ghostContainerTopLeft(activeRoute)} />
            <div className={style.ghostContainerTopRight(activeRoute)} />
            <div className={style.ghostContainerLeftBottom(activeRoute)} />
            <div className={style.ghostContainerRightBottom(activeRoute)} />
            <div className={style.ghostContainerConnect} />
          </div>
          <div className={style.buttonsWrapper}>
            <div className={style.buttonsContainer}>
              {routeButtonsProps.map((button) => (
                <MinWidth768RoadmapButton key={button.title} {...button} />
              ))}
            </div>
          </div>
          <div className={style.listWrapper}>
            <MinWidth768SkeletonRoadmap />
            {roadmapList[activeRoute].map((item, index) => (
              <MinWidth768RoadmapListItem
                data={item}
                index={index}
                key={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `hidden md:block max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-16 md:pt-44 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  headingContainer: `flex items-center justify-center flex-col text-center`,
  formationIcon: `w-8 h-8 mx-auto md:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  textGradient: `textGradient`,
  span: `text-[#F5F5F5] text-lg text-justify mt-2 inline-block`,
  roadmapWrapper: `w-full relative`,
  accountPlaceholderIconContainer: `relative mt-14 mx-auto w-10 h-10`,
  accountPlaceholderIcon: `w-10 h-10 mx-auto z-20 absolute top-0 rounded-full bg-black`,
  ghostContainersWrapper: `absolute z-0 grid grid-cols-2 w-[77%] inset-0 mx-auto top-5 left-0 h-[99px]`,
  buttonsWrapper: `relative h-[75px] mt-10`,
  buttonsContainer: `flex absolute w-full z-10 items-center gap-x-16 lg:gap-x-4 justify-between`,
  listWrapper: `relative grid grid-cols-2 mt-36`,
  ghostContainerTopLeft: (activeRoute: Routes) => {
    const defaultStyle =
      'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'beginner') {
      return `border-t border-l border-t-[#8bbe1a] border-l-[#8bbe1a] ${defaultStyle}`
    } else {
      return `border-t border-l border-t-[#949494]/20 border-l-[#949494]/20 ${defaultStyle}`
    }
  },
  ghostContainerTopRight: (activeRoute: Routes) => {
    const defaultStyle =
      'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'intermediary') {
      return `border-l border-t border-r border-l-[#8bbe1a] border-t-[#949494]/20 border-r-[#949494]/20 ${defaultStyle}`
    } else if (activeRoute === 'advanced') {
      return `border-l border-t border-r border-l-[#949494]/20 border-t-[#8bbe1a] border-r-[#8bbe1a] ${defaultStyle}`
    } else {
      return `border-l border-t border-r border-[#949494]/20`
    }
  },
  ghostContainerLeftBottom: (activeRoute: Routes) => {
    const defaultStyle =
      'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'beginner') {
      return `border-l border-b border-l-[#8bbe1a] border-b-[#8bbe1a] ${defaultStyle}`
    } else {
      return `border-l border-b border-l- border-[#949494]/20 border-b- border-[#949494]/20  ${defaultStyle}`
    }
  },
  ghostContainerRightBottom: (activeRoute: Routes) => {
    const defaultStyle =
      'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'advanced') {
      return `border-l border-b border-r border-r-[#8bbe1a] border-b-[#8bbe1a] border-l-[#949494]/20 ${defaultStyle}`
    } else if (activeRoute === 'intermediary') {
      return `border-l border-b border-r border-r-[#949494]/20 border-b-[#949494]/20 border-l-[#8bbe1a] ${defaultStyle}`
    } else {
      return `border-l border-b border-r border-r-[#949494]/20 border-b-[#949494]/20 border-l-[#949494]/20 ${defaultStyle}`
    }
  },
  ghostContainerConnect: `border-l border-l-[#8bbe1a] col-span-1 col-start-2 w-full h-[150px]`,
}
