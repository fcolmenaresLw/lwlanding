import thiagoNigro from './assets/mentors/thiago-nigro.webp'
import guilhermeBenchimol from './assets/mentors/guilherme-benchimol.webp'
import howardMarks from './assets/mentors/howard-marks.webp'
import samirKerbage from './assets/mentors/samir-kerbage.webp'
import fernandoFerreira from './assets/mentors/fernando-ferreira.webp'
import mariliaFontes from './assets/mentors/marilia-fontes.webp'
import florianBartunek from './assets/mentors/florian-bartunek.webp'
import brunoPerini from './assets/mentors/bruno-perini.webp'
import fabioGiambiagi from './assets/mentors/fabio-giambiagi.webp'

import treasuryDirect from './assets/contents/treasury-direct.svg'
import fundamentalsOfTheExchange from './assets/contents/fundamentals-of-the-exchange.svg'
import cryptocurrencies from './assets/contents/cryptocurrencies.svg'
import fixedIncome from './assets/contents/fixed-income.svg'
import indicatorAnalysis from './assets/contents/indicator-analysis.svg'
import investmentFunds from './assets/contents/investment-funds.svg'
import publicFinances from './assets/contents/public-finances.svg'
import diversification from './assets/contents/diversification.svg'
import reserveOfValue from './assets/contents/reserve-of-value.svg'
import behavioralBiases from './assets/contents/behavioral-biases.svg'
import equity from './assets/contents/equity.svg'
import others from './assets/contents/others.svg'

import downloadIcon from './assets/app/download.svg'
import trialsIcon from './assets/app/trials-icon.svg'
import materialsIcon from './assets/app/materials-icon.svg'
import playerIcon from './assets/app/plus-player-icon.svg'

import learnFromScratch from './assets/roadmap/learn-from-scratch.svg'
import fundamentalConcepts from './assets/roadmap/fundamental-concepts.svg'
import glossariesAndSpecialMaterials from './assets/roadmap/glossaries-and-special-materials.svg'
import clearYourDoubts from './assets/roadmap/clear-your-doubts.svg'
import learnStockMarketAnalysis from './assets/roadmap/learn-stock-market-analysis.svg'
import investBetter from './assets/roadmap/invest-better.svg'
import deepenYourKnowledge from './assets/roadmap/deepen-your-knowledge.svg'
import bestTeachers from './assets/roadmap/best-teachers.svg'
import furtherDeepenYourKnowledge from './assets/roadmap/further-deepen-your-knowledge.svg'
import getProfessionalInTheMarket from './assets/roadmap/get-professional-in-the-market.svg'
import updateYourKnowledge from './assets/roadmap/update-your-knowledge.svg'
import monthlyContent from './assets/roadmap/monthly-content.svg'

import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'

import finclasses from './assets/contents/finclasses.svg'
import finseries from './assets/contents/finseries.svg'
import finbooks from './assets/contents/finbooks.svg'

type RoadmapListItem = {
  icon: string
  title: string
  description: string
}

type Feedback = {
  title: string
  feedback: string
}

type User = {
  avatar: string
  name: string
  role: string
}

type FaqItem = {
  title: string
  content: string
}

interface Mentors {
  name: string
  img: string
  description: string
  videoID: string
}

interface ContentsListItem {
  img: string
  content: string
}

interface ContentSquareListItem {
  icon: string
  title: string
}

interface AppListItem {
  icon: string
  title: string
  description: string
}

interface RoadmapList {
  beginner: RoadmapListItem[]
  intermediary: RoadmapListItem[]
  advanced: RoadmapListItem[]
}

interface Feedbacks {
  user: User
  feedback: Feedback
}

interface Faq {
  general: FaqItem[]
  application: FaqItem[]
  subscriptions: FaqItem[]
}

export const mentors: Mentors[] = [
  {
    name: `Delivery Services`,
    img: thiagoNigro,
    description: `Deliver services that increase IT’s business value. Align strategic IT decisions with those of the company-prove your value through execution, efficiency, and satisfaction.`,
    videoID: `BuZlh8lXliI`,
  },
  {
    name: `Security Protections`,
    img: guilhermeBenchimol,
    description: `Protect company data from breaches. IT is at the forefront of businesses security. Implement solutions that control access, patches, and policies to keep your network secure.`,
    videoID: `93iOx4OKLgg`,
  },
  {
    name: `Automations`,
    img: howardMarks,
    description: `OFree up resources for strategic projects. Through policy based automation and improved workflows you’ll have more time to work on the big picture.`,
    videoID: `M0juBlRCJNc`,
  },
  {
    name: `Marilia Fontes`,
    img: mariliaFontes,
    description: `Sócia da Nord Research ensina como a renda fixa funciona.`,
    videoID: `dQChevfVxRw`,
  },
  {
    name: `Bruno Perini`,
    img: brunoPerini,
    description: `Criador do canal “Você Mais Rico” ensina sobre reserva de valor.`,
    videoID: `XtO1qRcifEI`,
  },
  {
    name: `Samir Kerbage`,
    img: samirKerbage,
    description: `CTO da Hashdex, ensina sobre criptoativos e bitcoin.`,
    videoID: `RGnJa5cLVWo`,
  },
  {
    name: `Florian Bartunek`,
    img: florianBartunek,
    description: `Gestor da Constellation ensina sobre os fundamentos da bolsa.`,
    videoID: `t0NxxdOdEzc`,
  },
  {
    name: `Fernando Ferreira`,
    img: fernandoFerreira,
    description: `Estrategista-chefe da XP ensina análise de indicadores.`,
    videoID: `JZJQcITNrb0`,
  },
  {
    name: `Fabio Giambiagi`,
    img: fabioGiambiagi,
    description: `Economista-chefe do BNDES ensina sobre finanças públicas.`,
    videoID: `O3RKkGAuvAU`,
  },
]

export const contentsList: ContentsListItem[] = [
  {
    img: finclasses,
    content: `Aulas com alto nível de produção sobre diversos assuntos
    relacionados a investimentos e finanças, onde você é ensinado
    por grandes especialistas do mercado.`,
  },
  {
    img: finseries,
    content: `Documentários originais que visam um entretenimento
    relacionado ao mundo do dinheiro, trazendo grandes experts
    mundiais.`,
  },
  {
    img: finbooks,
    content: `Insights sobre os melhores livros de investimentos, economia e
    dinheiro vindos de pessoas que estudaram a fundo esses livros.`,
  },
]

export const contentsSquareList: ContentSquareListItem[] = [
  {
    icon: treasuryDirect,
    title: 'Software Integrators',
  },
  {
    icon: fundamentalsOfTheExchange,
    title: ' Project Management',
  },
  {
    icon: cryptocurrencies,
    title: 'It Strategics',
  },
  {
    icon: fixedIncome,
    title: 'IT HeadHunters',
  },
  {
    icon: indicatorAnalysis,
    title: 'Vendor Management',
  },
  {
    icon: investmentFunds,
    title: 'Outsourcing',
  },
  {
    icon: publicFinances,
    title: 'Digital Transformation',
  },
  {
    icon: diversification,
    title: 'Remote Management',
  },
  {
    icon: reserveOfValue,
    title: 'IT Monitoring',
  },
  
]

export const appList: AppListItem[] = [
  {
    icon: downloadIcon,
    title: `IT Management & Governance`,
    description: `Partners (YOU) receive in depth consultations to help you understand and utilize the endless capabilities of the platforms. Our experienced team will be there to assist you with setting up, and optimizing your platform so you won’t be faced with any avoidable road blocks.`,
  },
  {
    icon: trialsIcon,
    title: `It Consulting Outsourcing`,
    description: `Provide IT consulting and support that is forward thinking, affordable and flexible. Our services flex with your business needs. We work tirelessly to find the best and brightest talent, enabling you to receive the best service delivery.
    We work to earn your trust in a way that doesn’t require you to speak “geek.” Our focus is on proactive service; preventing issues and not waiting for emergencies. We provide strategic analysis of your business’s technologies and long term road-maps to keep you on budget and ahead of your competition.`,
  },
  {
    icon: materialsIcon,
    title: `Remote Monitoring and Management`,
    description: `Our Team surpass client expectations and deliver superior service. It eliminates the need to hire additional employees and allows our team to scale quickly, manage more efficiently, and grow their business without limits.`,
  },
  // {
  //   icon: playerIcon,
  //   title: `+500 aulas já disponíveis`,
  //   description: `Mais de 500 aulas para assistir e continuar a sua jornada com novos conteúdos todos os meses.`,
  // },
]

export const roadmapList: RoadmapList = {
  beginner: [
    {
      icon: learnFromScratch,
      title: 'Delivery Services',
      description: `Deliver services that increase IT’s business value. Align strategic IT decisions with those of the company-prove your value through execution, efficiency, and satisfaction.`,
    },
    {
      icon: fundamentalConcepts,
      title: 'Security Protections',
      description: `Protect company data from breaches. IT is at the forefront of businesses security. Implement solutions that control access, patches, and policies to keep your network secure.`,
    },
    {
      icon: glossariesAndSpecialMaterials,
      title: 'Automations',
      description: `Free up resources for strategic projects. Through policy based automation and improved workflows you’ll have more time to work on the big picture.`,
    },
    // {
    //   icon: clearYourDoubts,
    //   title: 'Tire suas dúvidas',
    //   description: `Tenha um suporte para tirar todas as suas dúvidas relacionadas ao conteúdo
    //   da plataforma.`,
    // },
  ],
  intermediary: [
    {
      icon: learnStockMarketAnalysis,
      title: 'Delivery Services',
      description: `Deliver services that increase IT’s business value. Align strategic IT decisions with those of the company-prove your value through execution, efficiency, and satisfaction.`,
    },
    {
      icon: investBetter,
      title: 'Security Protections',
      description: `Protect company data from breaches. IT is at the forefront of businesses security. Implement solutions that control access, patches, and policies to keep your network secure.`,
    },
    {
      icon: deepenYourKnowledge,
      title: 'Automations',
      description: `Free up resources for strategic projects. Through policy based automation and improved workflows you’ll have more time to work on the big picture.`,
    },
   
  ],
  advanced: [
    {
      icon: furtherDeepenYourKnowledge,
      title: 'Aprofunde seu conhecimento',
      description: `Aprenda conceitos novos e técnicos sobre o mercado financeiro e melhore
      ainda mais a sua tomada de decisão.`,
    },
    {
      icon: getProfessionalInTheMarket,
      title: 'Profissionalize-se no mercado',
      description: `Adquira o conhecimento que os melhores profissionais do mercado financeiro
      têm.`,
    },
    {
      icon: updateYourKnowledge,
      title: 'Atualize seus conhecimentos',
      description: `Atualize-se com os conceitos mais importantes do mercado e sempre fique por
      dentro das novas tendências e estratégias do mercado.`,
    },
    {
      icon: monthlyContent,
      title: 'Conteúdo Mensal',
      description: `Tenha sempre um conteúdo novo para assistir e continue sempre se atualizando
      das novidades do mercado.`,
    },
  ],
}

export const feedbacks: Feedbacks[] = [
  {
    user: {
      avatar: user1,
      name: 'Sarah Fagundes',
      role: 'Empreendedora - Curitiba',
    },
    feedback: {
      title: 'A finclass mudou minha vida ',
      feedback: `A Finclass veio para revolucionar tudo o que já vimos no mercado financeiro. 
      A oportunidade de ter tanta gente incrível e de tão alto nível na palma da minha mão me 
      traz liberdade, muita bagagem enquanto eu estou aprendendo.
      <br />
      <br />
      Na Finclass está tudo organizado e “mastigado” para gente. Recomendo de olhos fechados, 
      é a coisa mais incrível que eu já vi na internet. É literalmente uma Netflix dos 
      investimentos - só que melhor!`,
    },
  },
  {
    user: {
      avatar: user2,
      name: 'Yasmin Rodrigues',
      role: 'Gestora de Processos São Paulo',
    },
    feedback: {
      title: 'Os maiores mentores de finanças do mundo!',
      feedback: `A Finclass é muito completa, desde aulas, documentos e livros! Com os
      maiores mentores de finanças do mundo! Jeito leve de aprender finanças e realmente 
      mudar de vida, aumentando a nossa famosa bola de neve e sair da corrida dos ratos e
      fazer seu dinheiro trabalhar por nós! Uma maneira de aprender um pouco todos os dias
      sem ser cansativo, dentro da minha rotina! A finclass é expecional!`,
    },
  },
  {
    user: {
      avatar: user3,
      name: 'Carlos Junqueira',
      role: 'Gestor de Processos São Paulo',
    },
    feedback: {
      title: 'Jeito leve de aprender finanças',
      feedback: `A plataforma tem um conceito incrível: incluir diversos temas relacionados 
      a finanças em um mesmo lugar (aulas, documentários, livros, etc.).
      <br />
      <br />
      As autoridades sobre os temas, até o momento, estão ótimas (Braga sobre vieses, 
      Giambiagi sofre finanças públicas e Breno Perrucho sobre o início dos investimentos). 
      A plataforma está fácil de mexer, bem intuitiva e com um design muito bonito.`,
    },
  },
]

export const faq: Faq = {
  general: [
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
  ],
  application: [
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title:
        'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title:
        'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
  ],
  subscriptions: [
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title:
        'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Lorem Ipsum',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
  ],
}
