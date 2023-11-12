import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Qual é a diferença entre a Pomada de Calêndula e o Spray Suavizante de Calêndula?',
      answer:
        ' A Pomada de Calêndula é indicada para peles afetadas por feridas e queimaduras, oferecendo propriedades anti-inflamatórias e cicatrizantes. Por outro lado, o Spray Suavizante de Calêndula é utilizado para a renovação celular da pele, com atributos antibacterianos e anti-inflamatórios, sendo especialmente recomendado para a cicatrização de feridas em pessoas diabéticas.',
    },
    {
      question: ' Como usar o Medic Save - Solução/Spray Higienizante e Antisséptica?',
      answer: ' Aplique a solução antisséptica utilizando a válvula borrifadora diretamente na pele. Esta solução é eficaz na limpeza da pele, proporcionando ação residual de amplo espectro sobre bactérias como Staphylococcus aureus, Salmonella choleraesuis e Pseudomonas aeruginosa.',
    },
    {
      question: 'Qual é a função do Medic Save - Gelmix/Gel Barreira de Adesão Cellosize?',
      answer:
        'O Gelmix é uma solução antisséptica que atua como uma barreira de adesão hidratante para feridas, oferecendo ação antisséptica, antiflogística e emoliente refrescante. Sua composição é eficaz para promover a cicatrização.',
    },
  ],
  [
    {
      question: 'Posso usar o Medic Save - Creamgel/Loção Corporal Hidratante para Feridas em qualquer tipo de ferida?',
      answer:
        'Sim, o Creamgel é indicado para feridas e possui propriedades antissépticas, antiflogísticas e emolientes refrescantes. Pode ser aplicado em diversos tipos de feridas para promover hidratação e auxiliar no processo de cicatrização.        ',
    },
    {
      question:
        'O Kit SAMULIN é indicado apenas para profissionais da área de saúde?',
      answer:
        'Embora o Kit SAMULIN contenha uma solução antisséptica, ele pode ser utilizado por qualquer pessoa para a higienização da pele. No entanto, é importante seguir as instruções de uso fornecidas na embalagem.',
    },
    {
      question:
        'Qual é a principal função da Pomada de Aloe Vera com D`Pantenol e PHMB?',
      answer:
        'A Pomada de Aloe Vera é especialmente formulada para feridas com potencial de infecção, como queimaduras e úlceras. Suas propriedades cicatrizantes ajudam no processo de recuperação da pele.',
    },
  ],
  [
    {
      question: 'Os produtos são seguros para pessoas com diabetes?',
      answer:
        'Sim, os produtos são desenvolvidos para atender às necessidades específicas de pessoas com diabetes, oferecendo propriedades que auxiliam na cicatrização de feridas e na prevenção de infecções.',
    },
    {
      question: 'Posso utilizar mais de um produto simultaneamente?',
      answer: ' Sim, é possível combinar diferentes produtos conforme necessário. No entanto, é aconselhável seguir as instruções de uso de cada produto e, se houver dúvidas, consultar um profissional de saúde.',
    },
    {
      question: 'Existe alguma restrição de uso para gestantes ou lactantes?',
      answer:
        ' Recomenda-se consultar um profissional de saúde antes de usar os produtos durante a gravidez ou amamentação. Embora muitos sejam seguros, é importante garantir que não haja contraindicações específicas para cada caso individual.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Se você não encontrar o que procura, envie um e-mail para nossa equipe de suporte e, se tiver sorte, alguém entrará em contato com você.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
