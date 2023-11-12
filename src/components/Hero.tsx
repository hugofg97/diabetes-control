import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import { Logo, LogoWithProps } from './Logo'

export function Hero() {
  return (
    <Container className="pb-16  text-center">
      <div className="w-full flex justify-center">
      <LogoWithProps classNames='relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] '/>

      </div>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-4xl">
     
       
        Hidratação especializada e antisséptica para feridas, queimaduras, e pacientes diabéticos
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Com fórmulas exclusivas, oferecendo hidratação e ação antisséptica, auxiliando na saúde da pele. Cuide da sua pele com nossos produtos e sinta a diferença.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="#produtos">Conferir Produtos</Button>
        {/* <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Saiba mais</span>
        </Button> */}
      </div>
  
    </Container>
  )
}
