import graduationHat from '../assets/graduation-hat.svg'
import { useEffect, useRef } from 'react'
import { mentors } from '../data'
import { MentorCard } from './integrate/MentorCard'
import { motion } from 'framer-motion'
import { mentorsHeadingAnimation } from '../utils/animations'

interface Props {}

export const Mentors = (props: Props) => {
  const slider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isDragging: boolean = false
    let currentX: number
    let initialX: number
    let xOffset: number = 0

    if (slider.current) {
      slider.current.addEventListener('mousedown', dragStart)
      slider.current.addEventListener('mouseup', dragEnd)
      slider.current.addEventListener('mouseleave', dragEnd)
      slider.current.addEventListener('mousemove', drag)

      function dragStart(e: any) {
        initialX = e.clientX
        isDragging = true
      }

      function dragEnd(e: any) {
        isDragging = false
      }

      function drag(e: any) {
        if (!isDragging) return
        e.preventDefault()
        currentX = e.clientX
        xOffset = currentX - initialX
        slider.current!.scrollLeft = slider.current!.scrollLeft - xOffset
      }

      return () => {
        if (slider.current) {
          slider.current.removeEventListener('mousedown', dragStart)
          slider.current.removeEventListener('mouseup', dragEnd)
          slider.current.removeEventListener('mouseleave', dragEnd)
          slider.current.removeEventListener('mousemove', drag)
        }
      }
    }
  }, [slider])
  return (
    <section id="mentors" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <motion.div
          {...style.handleHeading().mentorsHeadingAnimation}
          className={style.handleHeading().className}
        >
          <img
            src={graduationHat}
            alt="graduation-hat/svg"
            className={style.icon}
          />
          <h2 className={style.heading}>
            <strong className={style.headingStrong}>Comprehensive</strong> Managed{' '}
            <br className="md:hidden" /> IT Services
          </h2>
          <span className={style.span}>
          If it ain’t broke, don’t fix it. True or false? When it comes to business IT: false. Savvy businesses know that smart IT management not only prevents costly failures, it also protects profitability. Yes, we provide our managed IT clients with IT support “when bad things happen.” But with comprehensive managed IT services, we can keep bad things—like system crashes, data loss and downtime—from happening in the first place. Proactively create a stable, secure, managed IT environment for your business. With our team of With flexible IT support options, we can offer custom solutions to fit any size business. IT specialists handling your IT strategy—including management, maintenance and support for all your IT needs—you can concentrate on building your business.
          </span>
        </motion.div>
      
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-10 md:pt-44 max-w-screen-xl w-full mx-auto px-4 md:px-4`,
  handleHeading: () => {
    return {
      mentorsHeadingAnimation,
      className: `text-center`,
    }
  },
  icon: `w-fit mx-auto`,
  heading: `text-3xl md:text-4xl font-bold mt-3 !leading-[140%]`,
  headingStrong: `textGradient`,
  span: `text-[#F5F5F5] md:text-xl mt-2 inline-block text-justify`,
  sliderWrapper: `relative`,
  overlayLeft: `absolute z-10 -left-16 inset-y-0 h-full w-[100px] md:w-[150px] bg-gradient-to-r from-black md:via-black to-transparent`,
  overlayRight: `absolute z-10 -right-16 inset-y-0 h-full w-[100px] md:w-[150px] bg-gradient-to-l from-black md:via-black to-transparent`,
  sliderContainer: `scrollbar-hide pl-0 pr-8 md:pl-2 md:pr-14 my-10 mx-auto flex gap-x-1 items-center scroll-smooth overflow-x-scroll relative`,
}
