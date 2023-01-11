import { useState, useEffect } from 'react';
import { HeaderMegaMenu } from '../components/common/Navbarwebsite';
import { TimeLine } from '../components/Timeline';
import { MySkills } from '../components/Skills';
import { SectionProjects } from '../components/SectionProjects';
import { FooterCentered } from '../components/common/Footerwebsite';
import { ContactMe } from '../components/common/ContactMe';
import CarouselForApp from '../components/Carousel';
import { SectionDescription } from '../components/SectionDescription';
import { StringForAppFr } from '../assets/utils/lang/StringForAppFr';
import { CardAboutMe } from '../components/CardAboutMe';

export default function HomePage() {
  // const [items, setItems] = useState([]);
  // const [users] = useState('GhedeoNts');

  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     const res = await fetch(`https://api.github.com/users/${users}/repos?page=1&per_page=10&sort=update`);
  //     const data = await res.json();
  //     setItems(data);
  //   };

  //   fetchRepos();
  // }, []);

  return (
    <>
      <HeaderMegaMenu />
      <CarouselForApp />
      <CardAboutMe />
      <SectionDescription />
      <MySkills />
      <TimeLine />
      <SectionProjects />
      <ContactMe />
      <FooterCentered
        links={[
          {
            link: '/accueil',
            label: StringForAppFr.Links.LinksNav.home,
          },
          {
            link: '/profil',
            label: StringForAppFr.Links.LinksNav.profile,
          },
          {
            link: '#ContactMe',
            label: StringForAppFr.Links.LinksNav.contact,
          },
        ]}
      />
    </>
  );
}
