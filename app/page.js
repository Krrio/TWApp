/* eslint-disable eol-last */

import { Footer, Navbar, WorkWith } from '../components';
import { Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

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
      <WorkWith />
    </div>
    <Footer />
  </div>
);

export default Page;
