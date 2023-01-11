import { useEffect, useState } from 'react';
import { Container, Loader } from '@mantine/core';
import { HeaderMegaMenu } from '../../components/common/Navbarwebsite';
import { FooterCentered } from '../../components/common/Footerwebsite';
import { UserCardImage } from '../../components/UserCardImage';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import BannerImageProfile from '../../assets/images/Bannerprofilimg.png';
import { ContactMe } from '../../components/common/ContactMe';

export default function Profile() {
  // const { classes } = useStyles();
  const [items, setItems] = useState<any>();
  const [users] = useState('GhedeoNts');

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${users}`);
      const data = await res.json();
      setItems(data);
    };

    fetchRepos();
  }, []);

  return (
    <>
      <HeaderMegaMenu />
      <Container
        fluid
        mt={5}
      >
        <UserCardImage
          image={BannerImageProfile}
          avatar={items ? items.avatar_url : <Loader size="sm" />}
          name={`${StringForAppFr.Profile.identity.firstName} ${StringForAppFr.Profile.identity.name}`}
          job={StringForAppFr.Profile.identity.profession.title}
          stats={
            [
              {
                value: items ? items.public_repos : <Loader size="sm" />,
                label: 'Repositories',
              },
              {
                value: items ? items.followers : <Loader size="sm" />,
                label: 'Follows',
              },
              {
                value: items ? items.following : <Loader size="sm" />,
                label: 'Following',
              },
            ]}
        />
        <ContactMe />
      </Container>
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
