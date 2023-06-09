import React from 'react'

interface Props {
  title: string
}

export const Button = ({ title }: Props) => {
  return (
    <a
      href="https://facebook.com"
      target="_blank"
      className="relative cursor-pointer hover:ring-1  active:scale-95 transition-all duration-300 hover:ring-[#8bbe1a] w-full max-w-[311px] inline-flex items-center justify-center tracking-wider px-6 py-3 overflow-hidden font-semibold text-white rounded-md group shadow-lg shadow-white/10"
    >
      <span className="absolute inset-0 w-full h-full opacity-1 group-hover:opacity-0 transition duration-300 ease-out opacity-1 bg-gradient-to-br from-[#8bbe1a] to-[8bbe1a]" />
      <span className="relative group-hover:text-[#231f20]">{title}</span>
    </a>
  )
}
