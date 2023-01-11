import { Anchor, Group, ActionIcon, UnstyledButton, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconBrandDiscord } from '@tabler/icons';
import LogoForApp from '../../../../public/LOGOPortfolio.png';
import { useStyles } from './styles';

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps): JSX.Element {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      component="a"
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <UnstyledButton component="a" href="/accueil">
          <Image src={LogoForApp.src} width={35} />
        </UnstyledButton>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon
            component="a"
            href="https://fr.linkedin.com/in/ghedeon-ntsiassila-78b142222"
            target="_blank"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://github.com/GhedeoNts"
            target="_blank"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://twitter.com/GhedeoNts"
            target="_blank"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://discordapp.com/users/938382315481075742"
            target="_blank"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandDiscord size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
