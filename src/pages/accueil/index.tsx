/* eslint-disable react/jsx-indent-props */
import { HeaderMegaMenu } from '../../components/common/Navbarwebsite';
import { HeroBullets } from '../../components/Bannerabout';
import { TimeLine } from '../../components/Timeline';
import { MySkills } from '../../components/Skills';
import { SectionProjects } from '../../components/SectionProjects';
import { FooterCentered } from '../../components/common/Footerwebsite';
import { ContactMe } from '../../components/common/ContactMe';
import CarouselForApp from '../../components/Carousel';
import { SectionDescription } from '../../components/SectionDescription';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import { CardAboutMe } from '../../components/CardAboutMe';

export default function Home() {
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
                links={
                    [
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
