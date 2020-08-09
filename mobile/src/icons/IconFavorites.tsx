import React from "react";
import { SvgXml } from "react-native-svg";

interface IconPros {
  color: string
}

const IconFavorites: React.FC<IconPros> = ({ color }) => {
  const FavoritesIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`

  const FavoritesIconSvg = () => <SvgXml xml={FavoritesIcon} width="100%" height='100%' />
  
  return <FavoritesIconSvg />
}

export default IconFavorites