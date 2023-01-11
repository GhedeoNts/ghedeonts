/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import {
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  // IconNotification,
  IconCode,
  IconBook,
  IconChevronDown,
  IconBuilding,
  IconTools,
  IconMessageDots,
} from '@tabler/icons';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import { useStyles } from './styles';
import { StringForAppFr } from '../../../assets/utils/lang/StringForAppFr';
import LogoForApp from '../../../../public/LOGOPortfolio.png';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const mockdata = [
    {
      icon: IconMessageDots,
      title: StringForAppFr.Links.LinksNav.about,
      description: 'En savoir plus, a propos de moi !',
      path: '/profil',
    },
    {
      icon: IconTools,
      title: StringForAppFr.Links.LinksNav.digitalSkills,
      description: 'Connaitre à propos de ma stack technologique',
      path: '#digitalSkills',
    },
    {
      icon: IconBuilding,
      title: StringForAppFr.Links.LinksNav.ProfessionalExperiences,
      description: 'Connaitre à propos de mon expérience professionnelle',
      path: '#ProfessionalExperiences',
    },
    {
      icon: IconBook,
      title: StringForAppFr.Links.LinksNav.TrainingsAndEducations,
      description: "Connaitre à propos de mon parcours d'étude et de formation",
      path: '#TrainingsAndEducations',
    },
    {
      icon: IconCode,
      title: StringForAppFr.Links.LinksNav.project,
      description: 'Mes réalisations et projets',
      path: '#project',
    },
  ];

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Box
        component={Link}
        href={item.path}
      >
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </Box>
    </UnstyledButton>
  ));

  return (
    <Box pb={1}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <UnstyledButton component="a" href="/accueil">
            <Image
              src={LogoForApp.src}
              width={45}
            />
          </UnstyledButton>

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a
              href="/accueil"
              className={classes.link}
            >
              {StringForAppFr.Links.LinksNav.home}
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      {StringForAppFr.Links.LinksNav.profile}
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text weight={500}>{StringForAppFr.Links.LinksNav.profile}</Text>
                  {/**<Anchor href="#" size="xs">
                  Voir tout</Anchor>**/}
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        {StringForAppFr.Links.LinksNav.moreInformation.title}
                      </Text>
                      <Text size="xs" color="dimmed">
                        {StringForAppFr.Links.LinksNav.moreInformation.aboutMe}
                      </Text>
                    </div>
                    <Button<'a'>
                      component="a"
                      href="/profil"
                    >
                      {StringForAppFr.Links.LinksNav.moreInformation.title}
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a
              href="#ContactMe"
              className={classes.link}
            >
              {StringForAppFr.Links.LinksNav.contact}
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>
            <ColorSchemeToggle />
            <Button<'a'>
              component="a"
              href="/cv/CV-GHEDEON-NTSIASSILA.pdf"
              target="_blank"
              rel="Mon cv de candidature"
            >
              Mon CV
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="/accueil" className={classes.link}>
            {StringForAppFr.Links.LinksNav.home}
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                {StringForAppFr.Links.LinksNav.profile}
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a
            href="#ContactMe"
            className={classes.link}
          >
            {StringForAppFr.Links.LinksNav.contact}
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <ColorSchemeToggle />
            <Button<'a'>
              component="a"
              href="/cv/CV-GHEDEON-NTSIASSILA.pdf"
              target="_blank"
            >Mon CV
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
