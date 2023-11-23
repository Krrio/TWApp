import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="page-background-3 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;