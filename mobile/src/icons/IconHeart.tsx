import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  color: string
}

const IconGiveClass: React.FC<IconProps> = ({ color }) => {
  const giveClassIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Dar aulas">
  <g clip-path="url(#clip0)">
  <path id="Vector" d="M11.6667 15.0239V19.5119M11.6667 15.0239H8.33333M11.6667 15.0239H15M8.33333 15.0239L4.33333 20.3999M8.33333 15.0239H7C4.79086 15.0239 3 13.233 3 11.0239V7.59985C3 5.39071 4.79086 3.59985 7 3.59985H17C19.2091 3.59985 21 5.39071 21 7.59985V11.0239C21 13.233 19.2091 15.0239 17 15.0239H15M15 15.0239L19.6667 20.3999" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  </g>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="24" height="24" rx="8" fill="white"/>
  </clipPath>
  </defs>
  </svg>`

  const GiveClassesIconSvg = () => <SvgXml xml={giveClassIcon} width="100%" height='100%' />
  
  return <GiveClassesIconSvg />
}

export default IconGiveClass