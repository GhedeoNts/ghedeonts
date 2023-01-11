/* eslint-disable max-len */
import {
  Card,
  Text,
  Image,
  Group,
  Container,
} from '@mantine/core';
import { useStyles } from './styles';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import HTMLOGO from '../../assets/images/logos/HTML5.png';
import CSS3LOGO from '../../assets/images/logos/CSS3.png';
import JAVASCRIPTLOGO from '../../assets/images/logos/JAVASCRIPT.png';
import REACTLOGO from '../../assets/images/logos/REACT.png';
import REACTNATIVELOGO from '../../assets/images/logos/REACTNATIVE.png';
import TAILWINDCSSLOGO from '../../assets/images/logos/TAILWINDCSS.png';
import BOOTSTRAPLOGO from '../../assets/images/logos/BOOTSTRAP.png';
import NODEJSLOGO from '../../assets/images/logos/NODEJS.png';
import EXPRESSJSLOGO from '../../assets/images/logos/EXPRESSJS.png';
import PHPLOGO from '../../assets/images/logos/PHP.png';
import SEQUELIZELOGO from '../../assets/images/logos/SEQUELIZE.png';
import POSTGRESQLOGO from '../../assets/images/logos/POSTGRESQL.png';
import MYSQLOGO from '../../assets/images/logos/MYSQL.png';
import SQLOGO from '../../assets/images/logos/SQL.png';
import EXPOLOGO from '../../assets/images/logos/EXPO.png';
import DOCKERLOGO from '../../assets/images/logos/DOCKER.png';
import VIRTUALBOXLOGO from '../../assets/images/logos/VIRTUALBOX.png';
import UBUNTULOGO from '../../assets/images/logos/UBUNTU.png';
import FEDORALOGO from '../../assets/images/logos/FIGMA.png';
import WSLOGO from '../../assets/images/logos/WSL.jpeg';
import PHOTOSHOPLOGO from '../../assets/images/logos/PHOTOSHOP.png';
import PICSARTLOGO from '../../assets/images/logos/PICSART.png';
import CANVALOGO from '../../assets/images/logos/CANVA.png';
import TYPESCRIPTLOGO from '../../assets/images/logos/TYPESCRIPT.png';
import GITLOGO from '../../assets/images/logos/GIT.png';
import GITHUBLOGO from '../../assets/images/logos/GITHUB.png';
import BASHLOGO from '../../assets/images/logos/BASH.png';
import WPLOGO from '../../assets/images/logos/WP.png';
import TRELLOLOGO from '../../assets/images/logos/TRELLO.png';
import NEXTJS from '../../assets/images/logos/NEXTJS.png';

const mockdata = [
  {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.HTML.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.HTML.title,
    img: HTMLOGO,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.HTML.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.CSS3.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.CSS3.title,
    img: CSS3LOGO,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.CSS3.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.JAVASCRIPT.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.JAVASCRIPT.title,
    img: JAVASCRIPTLOGO,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.JAVASCRIPT.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.REACT.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.REACT.title,
    img: REACTLOGO,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.REACT.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.NEXTJS.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.NEXTJS.title,
    img: NEXTJS,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.NEXTJS.title,
  }, {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.TAILWINDCSS.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.TAILWINDCSS.title,
    img: TAILWINDCSSLOGO,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.TAILWINDCSS.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.FrontEnd.BOOTSTRAP.title,
    name: StringForAppFr.Profile.digitalSkills.FrontEnd.BOOTSTRAP.title,
    img: BOOTSTRAPLOGO,
    alt: StringForAppFr.Profile.digitalSkills.FrontEnd.BOOTSTRAP.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.EXPRESSJS.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.EXPRESSJS.title,
    img: EXPRESSJSLOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.EXPRESSJS.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.MYSQL.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.MYSQL.title,
    img: MYSQLOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.MYSQL.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.NODEJS.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.NODEJS.title,
    img: NODEJSLOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.NODEJS.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.PHP.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.PHP.title,
    img: PHPLOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.PHP.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.POSTGRESQL.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.POSTGRESQL.title,
    img: POSTGRESQLOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.POSTGRESQL.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.SEQUELIZE.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.SEQUELIZE.title,
    img: SEQUELIZELOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.SEQUELIZE.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.BackEnd.SQL.title,
    name: StringForAppFr.Profile.digitalSkills.BackEnd.SQL.title,
    img: SQLOGO,
    alt: StringForAppFr.Profile.digitalSkills.BackEnd.SQL.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Mobile.REACTNATIVE.title,
    name: StringForAppFr.Profile.digitalSkills.Mobile.REACTNATIVE.title,
    img: REACTNATIVELOGO,
    alt: StringForAppFr.Profile.digitalSkills.Mobile.REACTNATIVE.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Mobile.EXPO.title,
    name: StringForAppFr.Profile.digitalSkills.Mobile.EXPO.title,
    img: EXPOLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Mobile.EXPO.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Other.BASH.title,
    name: StringForAppFr.Profile.digitalSkills.Other.BASH.title,
    img: BASHLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Other.BASH.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Other.TYPESCRIPT.title,
    name: StringForAppFr.Profile.digitalSkills.Other.TYPESCRIPT.title,
    img: TYPESCRIPTLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Other.TYPESCRIPT.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Other.GIT.title,
    name: StringForAppFr.Profile.digitalSkills.Other.GIT.title,
    img: GITLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Other.GIT.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Other.GITHUB.title,
    name: StringForAppFr.Profile.digitalSkills.Other.GITHUB.title,
    img: GITHUBLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Other.GITHUB.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Other.TRELLO.title,
    name: StringForAppFr.Profile.digitalSkills.Other.TRELLO.title,
    img: TRELLOLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Other.TRELLO.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Other.WP.title,
    name: StringForAppFr.Profile.digitalSkills.Other.WP.title,
    img: WPLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Other.WP.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Design.CANVA.title,
    name: StringForAppFr.Profile.digitalSkills.Design.CANVA.title,
    img: CANVALOGO,
    alt: StringForAppFr.Profile.digitalSkills.Design.CANVA.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Design.PHOTOSHOP.title,
    name: StringForAppFr.Profile.digitalSkills.Design.PHOTOSHOP.title,
    img: PHOTOSHOPLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Design.PHOTOSHOP.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.Design.PICSART.title,
    name: StringForAppFr.Profile.digitalSkills.Design.PICSART.title,
    img: PICSARTLOGO,
    alt: StringForAppFr.Profile.digitalSkills.Design.PICSART.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.AdminSystem.DOCKER.title,
    name: StringForAppFr.Profile.digitalSkills.AdminSystem.DOCKER.title,
    img: DOCKERLOGO,
    alt: StringForAppFr.Profile.digitalSkills.AdminSystem.DOCKER.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.AdminSystem.FEDORA.title,
    name: StringForAppFr.Profile.digitalSkills.AdminSystem.FEDORA.title,
    img: FEDORALOGO,
    alt: StringForAppFr.Profile.digitalSkills.AdminSystem.FEDORA.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.AdminSystem.UBUNTU.title,
    name: StringForAppFr.Profile.digitalSkills.AdminSystem.UBUNTU.title,
    img: UBUNTULOGO,
    alt: StringForAppFr.Profile.digitalSkills.AdminSystem.UBUNTU.title,
  },
  {
    title: StringForAppFr.Profile.digitalSkills.AdminSystem.VIRTUALBOX.title,
    name: StringForAppFr.Profile.digitalSkills.AdminSystem.VIRTUALBOX.title,
    img: VIRTUALBOXLOGO,
    alt: StringForAppFr.Profile.digitalSkills.AdminSystem.VIRTUALBOX.title,
  },

  {
    title: StringForAppFr.Profile.digitalSkills.AdminSystem.WSL.title,
    name: StringForAppFr.Profile.digitalSkills.AdminSystem.WSL.title,
    img: WSLOGO,
    alt: StringForAppFr.Profile.digitalSkills.AdminSystem.WSL.title,
  },
];

export function MySkills() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item, id) => (
    <div key={id} className={classes.item}>
      <Image
        src={item.img.src}
        alt={item.alt}
        width={45}
      // height={'50%'}
      />
      <Text size="xs" mt={7}>
        {item.name}
      </Text>
    </div>
    /**{<UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>}**/
  ));
  return (
    <Container pt={50} pb={50}>
      <Card withBorder radius="md" id="digitalSkills" className={classes.card}>
        <Group position="apart">
          <Text className={classes.title} mt={10} mb={10}>{StringForAppFr.Profile.digitalSkills.title}</Text>
          {/**<Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
            + 21 other services
          </Anchor>**/}
        </Group>
        {/** <SimpleGrid
          cols={4}
          spacing="xs"
          verticalSpacing="xs"
          mt="sm"
        >
          {items}
        </SimpleGrid>**/}
        <Group position="center" spacing="xs" pt={10}>
          {items}
        </Group>
      </Card>
    </Container>
  );
}
