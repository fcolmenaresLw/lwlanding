import React from 'react'
import { Routes } from '../MinWidth768Roadmap'

interface Props {
  activeRoute: Routes
  setActiveRoute: React.Dispatch<React.SetStateAction<Routes>>
  icon: string
  title: string
  route: Routes
}

export const MinWidth768RoadmapButton = ({
  activeRoute,
  setActiveRoute,
  icon,
  title,
  route,
}: Props) => {
  return (
    <button
      onClick={() => setActiveRoute(route)}
      className={`${
        activeRoute === route ? 'border-[#8bbe1a]' : 'border-[#949494]/20'
      } border flex text-xl items-center transition-all duration-300 justify-center gap-x-3 rounded-lg font-bold w-full max-w-[290px] py-6 bg-[#0F1116]`}
    >
      <img src={icon} />
      {title}
    </button>
  )
}
