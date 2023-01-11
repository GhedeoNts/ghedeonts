import { Card, Avatar, Text, Group, Button, Center } from '@mantine/core';
import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons';
import { ContactMe } from '../common/ContactMe';
import { SectionDescription } from '../SectionDescription';
import { SectionProjects } from '../SectionProjects';
import { MySkills } from '../Skills';
import { TimeLine } from '../Timeline';
import { useStyles } from './styles';

interface UserCardImageProps {
  image: any;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserCardImage({ image, avatar, name, job, stats }: UserCardImageProps) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image.src})`, height: 150 }} />
      <Avatar src={avatar} size={200} radius={200} mx="auto" mt={-30} className={classes.avatar} />
      <Text align="center" size="lg" weight={500} mt="sm">
        <a
          href="https://fr.linkedin.com/in/ghedeon-ntsiassila-78b142222"
          target="_blank"
          className={classes.link}
          rel="noreferrer"
        >
          {name}
        </a>
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Center>
        {/* <ContainerFlex> */}
        <Group position="center" spacing="sm">
          <Button
            size="sm"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://fr.linkedin.com/in/ghedeon-ntsiassila-78b142222"
            leftIcon={<IconBrandLinkedin size={18} />}
            styles={(theme) => ({
              root: {
                backgroundColor: '#0A66C2',
                border: 0,
                height: 32,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#0A66C2', 0.05),
                },
              },

              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            Linkedin
          </Button>
          <Button
            size="sm"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/GhedeoNts"
            leftIcon={<IconBrandTwitter size={18} />}
            styles={(theme) => ({
              root: {
                backgroundColor: '#00acee',
                border: 0,
                height: 32,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.05),
                },
              },

              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            Twitter
          </Button>

          <Button
            size="sm"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GhedeoNts"
            leftIcon={<IconBrandGithub size={18} />}
            styles={(theme) => ({
              root: {
                backgroundColor: '#000000',
                border: 0,
                height: 32,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#000000', 0.05),
                },
              },

              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            Github
          </Button>
          <Button
            size="sm"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discordapp.com/users/938382315481075742"
            leftIcon={<IconBrandDiscord size={18} />}
            styles={(theme) => ({
              root: {
                backgroundColor: 'rgb(88 101 242)',
                border: 0,
                height: 32,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20,

                '&:hover': {
                  backgroundColor: theme.fn.darken('rgb(88 101 242)', 0.05),
                },
              },

              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            Discord
          </Button>
        </Group>
        {/* </ContainerFlex> */}
      </Center>
      <SectionDescription />
      <MySkills />
      <TimeLine />
      <SectionProjects />
    </Card>
  );
}
