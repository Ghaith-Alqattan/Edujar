import NavLogo from '../public/img/png/Edujar.png'
import heroManPic from '../public/img/png/man on chair.png'
import laptopGirl from '../public/img/png/girl with laptop.png'
import SpecialStar from '../public/img/svg/special star.svg'
import SmallStar from '../public/img/svg/Star 2.svg'

import Categorie1 from '../public/img/svg/cat1.svg'
import Categorie2 from '../public/img/svg/cat2.svg'
import Categorie3 from '../public/img/svg/cat3.svg'
import Categorie4 from '../public/img/svg/cat4.svg'
import Categorie5 from '../public/img/svg/cat5.svg'

import play1 from '../public/img/svg/play logo.svg'
import play2 from '../public/img/svg/play logo 2.svg'
import play3 from '../public/img/svg/play logo 3.svg'
import play4 from '../public/img/svg/play logo 4.svg'
import play5 from '../public/img/svg/play logo 5.svg'
import play6 from '../public/img/svg/play logo 6.svg'

import pic1 from '../public/img/png/small pfp.png'
import pic2 from '../public/img/png/small pfp 2.png'
import pic3 from '../public/img/png/small pfp 3.png'
import pic4 from '../public/img/png/small pfp 4.png'
import pic5 from '../public/img/png/small pfp 5.png'
import pic6 from '../public/img/png/small pfp 6.png'

import plus1 from '../public/img/svg/+.svg'

import pfp1 from '../public/img/png/slide pic -1.png'
import pfp2 from '../public/img/png/slide pic 0.png'
import pfp3 from '../public/img/png/slide pic 1.png'
import pfp4 from '../public/img/png/slide pic 2.png'
import pfp5 from '../public/img/png/slide pic 3.png'

import hubSpot from '../public/img/png/hubspot.png'
import loom from '../public/img/png/loom.png'
import gitLab from '../public/img/png/GitLab.png'
import liveChat from '../public/img/png/liveChat.png'
import monday from '../public/img/png/mondayCom.png'

import NavBar from '../Components/NavBar/NavBar.jsx'
import HeroT from '../Components/TopHero/HeroT.jsx'
import HeroB from '../Components/BottomHero/HeroB.jsx'
import Categories from '../Components/Categories/Categories.jsx'
import Courses from '../Components/Courses/Courses.jsx'
import Questions from '../Components/Questions/Questions.jsx'
import Clients from '../Components/Clients/Clients.jsx'
import Websites from '../Components/Websites/Websites.jsx'
import Footer from '../Components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <NavBar
        logo={NavLogo}
        NavLinks={[
          { link: 'Home' },
          { link: 'Courses' },
          { link: 'About us' },
          { link: 'Works' },
          { link: 'Blog' },
          { link: 'Contact' },
        ]}
        btn="signup"
      />
      <HeroT
        chairMan={heroManPic}
        title="learn with us anywhere with the best "
        specialWord="experts"
        paragraph="we collaborate with 275+ leading universities and companies"
        searchBtn="Explore"
        laptopGirl={laptopGirl}
      />
      <HeroB
        Items={[
          { title: '60K+', para: 'live courses' },
          { title: '35K+', para: 'category' },
          {
            logo: SpecialStar,
            title: 'Trustpilot',
            para: 'view our 1,602 reviews  ',
            rate: '4.9',
            star: SmallStar,
          },
          { title: '25K+', para: 'professionals' },
          { title: '125K+', para: 'students' },
        ]}
      />
      <Categories
        categories={[
          { logo: Categorie1, para: 'Art & Design' },
          { logo: Categorie2, para: 'Communication' },
          { logo: Categorie3, para: 'Finance And Bank' },
          { logo: Categorie4, para: 'Marketing' },
          { logo: Categorie5, para: 'Photography' },
        ]}
      />
      <Courses
        heading="Popular Courses"
        para="Let’s join our best classes with our famous  instructor and institutes"
        cards={[
          {
            logo: play1,
            title: '25x Lesson',
            courseType: 'Design',
            headingContent:
              'Supervised Machine Learning: Regression and Classification',
            para: 'For athletes, high altitude produces two contradi effects on performance.',
            btn: 'Join',
            CoursePic: pic1,
          },
          {
            logo: play2,
            title: '16x Lesson',
            courseType: 'Marketing',
            headingContent:
              'Programming for Everybody (Getting Started with Python)',
            para: 'For athletes, high altitude produces two contradi effects on performance.',
            btn: 'Join',
            CoursePic: pic2,
          },
          {
            logo: play3,
            title: '38x Lesson',
            courseType: 'Programming',
            headingContent: 'Leading Teams: Developing as a Leader',
            para: 'For athletes, high altitude produces two contradi effects on performance.',
            btn: 'Join',
            CoursePic: pic3,
          },
          {
            logo: play4,
            title: '25x Lesson',
            courseType: 'Design',
            headingContent:
              'Powerful mental tools to help you master tough subjects',
            para: 'For athletes, high altitude produces two contradi effects on performance.',
            btn: 'Join',
            CoursePic: pic4,
          },
          {
            logo: play5,
            title: '16x Lesson',
            courseType: 'Marketing',
            headingContent:
              'Programming for Everybody (Getting Started with Python)',
            para: 'For athletes, high altitude produces two contradi effects on performance.',
            btn: 'Join',
            CoursePic: pic5,
          },
          {
            logo: play6,
            title: '38x Lesson',
            courseType: 'Programming',
            headingContent: 'Leading Teams: Developing as a Leader',
            para: 'For athletes, high altitude produces two contradi effects on performance.',
            btn: 'Join',
            CoursePic: pic6,
          },
        ]}
      />
      <Questions
        smallPara="Frequently Asked Questions"
        title="Any Questions? Find here."
        sendBtn="Send Message"
        smallTitle="Can Conversix sync my data to my CRM?"
        para="Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."
        quesList={[
          {
            ques: 'How much data will I receive?',
            plus: plus1,
            ans: 'you can receive 5GB when you start with us.',
          },
          {
            ques: 'Can marketers use Conversix data on behalf of client?',
            plus: plus1,
            ans: 'maybe yes maybe no.',
          },
          {
            ques: 'How accurate is my data?',
            plus: plus1,
            ans: ' it depends on the source',
          },
        ]}
      />
      <Clients
        title="What our client’s say"
        para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        clientName="Adrian Smith"
        clientsPics={[
          { image: pfp1 },
          { image: pfp2 },
          { image: pfp3 },
          { image: pfp4 },
          { image: pfp5 },
        ]}
      />
      <Websites
        slider={[
          { logo: hubSpot },
          { logo: loom },
          { logo: gitLab },
          { logo: liveChat },
          { logo: monday },
        ]}
      />
      <Footer
        logo={NavLogo}
        para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
        linkTitle="Quick links"
        quickLinks={[
          { link: 'Home' },
          { link: 'Courses' },
          { link: 'About us' },
          { link: 'Works' },
          { link: 'Blog' },
        ]}
        legalTitle="Legal"
        legalLinks={[
          { legalLink: 'Terms of use' },
          { legalLink: 'Terms and Conditions' },
          { legalLink: 'Privacy Policy' },
          { legalLink: 'Cookie Policy' },
        ]}
        contactTitle="Quick links"
      />
    </>
  )
}
