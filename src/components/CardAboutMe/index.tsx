/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
import { Text, Title, Image, ActionIcon, Group, List, ThemeIcon, Container } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconBrandTwitter, IconBrandDiscord, IconCode } from '@tabler/icons';
import image from '../../assets/images/photo-de-profil-min.svg';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import { useStyles } from './styles';

export function CardAboutMe() {
    const { classes } = useStyles();
    return (
        <Container size="lg">
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>{StringForAppFr.Profile.identity.firstName}
                        &nbsp;{StringForAppFr.Profile.identity.name}
                    </Title>
                    <Text weight={500} size="lg" mb={5}>
                        <Text align="justify" color="dimmed" mt="md">
                            {StringForAppFr.Profile.shortdescription}
                        </Text>
                    </Text>

                    <div className={classes.controls}>

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
                <Image src={image.src} className={classes.image} />
            </div>
        </Container>
    );
}
