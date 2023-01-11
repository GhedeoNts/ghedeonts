import { Image, Container, Title, Group, Text, List, ThemeIcon, ActionIcon } from '@mantine/core';
import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconCode } from '@tabler/icons';
import image from '../../assets/images/photo-de-profil-min.svg';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import { useStyles } from './styles';

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {StringForAppFr.Profile.identity.firstName}
              &nbsp;{StringForAppFr.Profile.identity.name}
            </Title>
            <Text align="justify" color="dimmed" mt="md">
              {StringForAppFr.Profile.shortdescription}
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCode size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>{StringForAppFr.Profile.identity.profession.title}</b>
              </List.Item>
            </List>

            <Group mt={30}>
              <ActionIcon
                component="a"
                href="https://google.com"
                size="lg"
                variant="default"
                radius="xl"
              >
                <IconBrandLinkedin size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandGithub size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandTwitter size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandDiscord size={18} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
