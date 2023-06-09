import { Contents } from './components/Contents'
import { Finseries } from './components/Finseries'
import { Hero } from './components/Hero'
import { Mentors } from './components/Mentors'
import { AppMobile } from './components/AppMobile'
import { MinWidth768Roadmap } from './components/MinWidth768Roadmap'
import { MaxWidth768Roadmap } from './components/MaxWidth768Roadmap'
import { Feedbacks } from './components/Feedbacks'
import { Faq } from './components/Faq'
import { Subscription } from './components/Subscription'
import { Footer } from './components/Footer'

interface Props {}

export const App = (props: Props) => {
  return (
    <main id="main">
      <Hero />
      <Mentors />
      <Contents />
      <AppMobile />
      <MinWidth768Roadmap />
      <MaxWidth768Roadmap />
      <Faq />
      <Subscription />
      <Footer />
    </main>
  )
}
