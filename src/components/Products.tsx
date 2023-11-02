
'use client'
import {  useState } from 'react'
import {  Disclosure, Tab,  } from '@headlessui/react'
import {

  MinusIcon,
  PlusIcon,

} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

import medicSaveGel from '@/images/produtos/medic-save-gel.jpg'
import medicSavePomada from '@/images/produtos/medic-save-pomada.jpg'
import medicSaveSpray from '@/images/produtos/medic-save-spray.jpg'
import pomadaAloe from '@/images/produtos/pomada-aloe-vera.jpg'
import pomadaCalendula from '@/images/produtos/pomada-calendula.jpg'
import samulinSolucao from '@/images/produtos/samulin-solucao.jpg'
import sprayCalendula from '@/images/produtos/spray-calendura.jpg'
import Image from 'next/image'


const relatedProducts: Product[] = [
  {
    id: 1,
    name: 'POMADA DE CALÊNDULA COM ALATOÍNA E PHMB',
    href: '#',
    imageSrc: pomadaCalendula,
    imageAlt: 'Pomada hidratante e anti-inflamatória',
    price: 'R$123',
    description: `
    <p>Composição: Composta por Extrato de Calêndula, Extrato de Aloe Vera, Alantoína, Monooleato de Sorbitan Etoxilado, Agente Antimicrobiano e PHMB 20%.</p>
  
    <p>Indicações: Pomada de Calêndula tem propriedades sedativas para peles afetadas por agressões externas, como feridas e queimaduras. Possui componentes anti-inflamatórios e cicatrizantes.</p>
    
    <p>Especificações: Embalagem em polietileno opaca com tampa em rosca, no volume de 250 gramas.</p>
    `,
  
  },
  {
    id: 2,
    name: 'SPRAY SUAVIZANTE DE CALÊNDULA COM ALANTOÍNA E PHMB',
    href: '#',
    imageSrc: sprayCalendula,
    imageAlt: 'Spray hidratante e cicatrizante Caleêndula',
    price: 'R$223',
    description: `
    <p>Composição: Composto por Extrato de Calêndula, Extrato de Aloe Vera, Alantoína, PHMB 20%, Agente Antimicrobiano e Água Destilada.</p>
  
    <p>Indicações: Spray de Calêndula tem como propriedade a renovação celular da pele devido aos seus atributos antibacterianos e anti-inflamatórios. Produto indicado a cicatrização de feridas de pessoas diabéticas.</p>
    
    <p>Especificações: Embalagem em polietileno opaca com tampa em spray, no volume de 250 ml.</p>
    `,
  
  },
  {
    id: 3,
    name: "POMADA DE ALOE VERA COM D'PANTENOL E PHMB",
    href: '#',
    imageSrc: pomadaAloe,
    imageAlt: 'Pomada Aloe Vera para queimaduras e feridas',
    price: 'R$244',
    description: `
    <p>Composição: Composta por Extrato de Aloe Vera, Dexpantenol, Propionato de Clobetasol e PHMB 20%.</p>
  
    <p>Indicações: Pomada de Aloe Vera tem propriedades cicatrizantes indicada a feridas com potencial de infecção, como queimaduras e úlceras.</p>
    
    <p>Especificações: Embalagem em polietileno opaca com tampa em rosca, no volume de 250 gramas.</p>
    `,
  },
  {
    id: 4,
    name: "SAMULIN SOLUÇÃO HIGIENIZANTE + COBERTOR MANTA TÉRMICA ALUMINIZADO RESGATE (KIT SAMU)",
    href: '#',
    imageSrc: samulinSolucao,
    imageAlt: 'Solução antisséptica para limpeza de pele',
    price: 'R$205',
    description: `
    <p>Composição: Composta por glycereth-7 triacetate, levemenol, polidocanol, cocoamida propibetaina, cloridrato de polihexametileno-biguanida 0,3%(PHMB), água desmineralizada.</p>
    <p>Indicações: Solução antisséptica para limpeza de pele, com ação residual de amplo espectro sobre as bactérias Staphylococcus aureus, Salmonella choleraesuis e Pseudomonas aeruginosa.</p>
    <p>Especificações: Embalagem em frascos de polietileno opaco, com válvula borrifadora, nos volumes de 500 ml.</p>
    `
  },
  {
    id: 5,
    name: "MEDIC SAVE - SOLUÇÃO / SPRAY HIGIENIZANTE E ANTISSÉPTICA",
    href: '#',
    imageSrc: medicSaveSpray,
    imageAlt: 'Solução antisséptica para limpeza de pele',
    price: 'R$144',
    description: `
    <p>Composta por glycereth-7 triacetate, levemenol, polidocanol,cocoamida propibetaina, cloridrato de polihexametileno-biguanida 0,3%(PHMB),água desmineralizada.</p>
    <p>Indicações: Solução antisséptica para limpeza de pele, com ação residual de amplo espectro sobre as bactérias Staphylococcus aureus, Salmonella choleraesuis e Pseudomonas aeruginosa.</p>
    <p>Especificações: Embalagem em frascos de polietileno opaco, com válvula burifadora, nos volumes de 250 ml.</p>
    
    `
  },
  {
    id: 6,
    name: "MEDIC SAVE - GELMIX / GEL BARREIRA DE ADESÃO CELLOSIZE",
    href: '#',
    imageSrc: medicSaveGel,
    imageAlt: 'Gel barreira de adesão e cicatrização',
    price: 'R$199',
    description: `
    <p>Composição: Composta por glycereth-7 triacetate, levemenol, polidocanol,cocoamida propibetaina, cloridrato de polihexametileno-biguanida 0,3%(PHMB),água desmineralizada.</p>
    <p>Indicações: Solução antisséptica para limpeza de pele, com ação residual de amplo espectro sobre as bactérias Staphylococcus aureus, Salmonella choleraesuis e Pseudomonas aeruginosa.</p>
    <p>Especificações: Embalagem em frascos de polietileno opaco, com válvula burifadora, nos volumes de 250 ml.</p>
    `
  },
  {
    id: 7,
    name: "MEDIC SAVE - CREAMGEL / LOÇÃO CORPORAL HIDRATANTE PARA FERIDAS",
    href: '#',
    imageSrc: medicSavePomada,
    imageAlt: 'Gel barreira de adesão hidratante para feridas',
    price: 'R$190',
    description : `
    <p>Composição: Composto por ácido linoléico, tocoferol, palmitato de retinila, triglicerideos dos ácidos caprilico/caprico, alfa bisabolol, óleo de girassol, óleo de copaíba, cloridrato de polihexametileno-biguanida 0,3%(PHMB), lecitina de soja, álcool cetoestearilico etoxilado, hidroxietil celulose, lanolina, esterato de sorbitan, oleato de sorbitan.</p>
    <p>Indicações: Gel barreira de adesão hidratante para feridas, ação antisséptica,antiflogistica,emoliente refrescante.</p>
    <p>Especificações: Embalagem em bisnaga de polietileno opaco com tampa flip top, nos volumes de 250 ml.</p>
    `
  },
  // More products...
]


function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
type Product = {
    id: number,
    name: string,
    href: string,
    imageSrc: any,
    imageAlt: string,
    price: string,
    description : string
}
export default function Example() {
const [product, setProduct] = useState<Product>(relatedProducts[0])

  return (
    <div  id="produtos" className="bg-white">



      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div  className="mx-auto max-w-2xl lg:max-w-none">
     
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
  
            <div className="flex flex-col-reverse">
    
              <div  className="aspect-h-1 aspect-w-1 w-full">
        
                  <div>
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </div>
          
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Informação do produto</h2>
                <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Avaliações</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                           'text-indigo-500' ,
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">5 de 5 estrelas</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

          

           
            </div>
          </div>

          <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">{product.price}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                        onClick={() =>  setProduct(product)}
                      href="#produtos"
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Ver mais<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

   
    </div>
  )
}
