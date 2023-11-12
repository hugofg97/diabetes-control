import logoImage from '@/images/logo.png'
import clsx from 'clsx'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="relative w-[100px] h-[100px] ">
      <Image src={logoImage} alt="RD Comécrio e Serviços Hospitalares" fill/>

    </div>
  )
}
export function LogoWithProps({classNames}: {classNames: string}) {
  return (
    <div className={clsx("relative w-[100px] h-[100px] ", classNames)}>
      <Image src={logoImage} alt="RD Comécrio e Serviços Hospitalares" fill/>

    </div>
  )
}
