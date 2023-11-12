'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// import backgroundImage from '@/images/background-features.jpg'
// import screenshotExpenses from '@/images/spray-antisseptico.jpg'
// import screenshotPayroll from '@/images/pomada-magic-save-hidratante.jpg'
// import screenshotReporting from '@/images/pomada-magic-save-protetora.jpg'
// import screenshotVatReturns from '@/images/pomada-magic-save-refrescante.jpg'

import hidratacaoImg from '@/images/hidratacao.jpg'
import refrescaImg from '@/images/refrescancia.jpeg'

import infeccaoImg from '@/images/infeccao-cutanea.jpg'
import { Button } from './Button'
const features = [
  {
    title: 'Hidratação Profunda',
    description:
      "Nossas fórmulas proporcionam uma hidratação profunda, ajudando a prevenir o ressecamento da pele, comum em pessoas com diabetes.",
    image: hidratacaoImg,
  },
  {
    title: 'Ação Antisséptica',
    description:
      "Sua fórmula com cloridrato de polihexametileno-biguanida (PHMB) oferece ação antisséptica, auxiliando na prevenção de infecções cutâneas.",
    image: infeccaoImg,
  },
  {
    title: 'Alívio Refrescante',
    description:
      "Experimente a sensação de alívio refrescante proporcionada, tornando o cuidado da pele uma experiência agradável.",
    image:refrescaImg,
  },

]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="beneficios"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Benefícios de nossos produtos
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
          Descubra por que os produtos da RD Comércio e Serviços Hospitalares é a escolha preferida de pacientes diabéticos para cuidar da pele
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="rounded-lg lg:w-[700px] lg:p-10 mt-20 md:mt-20 p-0">
                      <Image
                        className="w-full rounded-md"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
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
    </section>
  )
}
