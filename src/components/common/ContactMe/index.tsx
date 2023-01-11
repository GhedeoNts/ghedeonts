/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';
import { useRouter } from 'next/router';
/* eslint-disable react/jsx-indent-props */
import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Container,
    Box,
} from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconCheck, IconBrandDiscord } from '@tabler/icons';
//import ContainerFlex from '../components/common/Containerflex';
import { showNotification, updateNotification } from '@mantine/notifications';
import { ContactIconsList } from '../../ContactIconsList';
import { useStyles } from './styles';
import { StringForAppFr } from '../../../assets/utils/lang/StringForAppFr';
import { sendContactForm } from '../../../lib/api';

const social = [
    {
        iconsocial: IconBrandLinkedin,
        pathLink: 'https://fr.linkedin.com/in/ghedeon-ntsiassila-78b142222',
    },
    {
        iconsocial: IconBrandGithub,
        pathLink: 'https://github.com/GhedeoNts',
    },
    {
        iconsocial: IconBrandTwitter,
        pathLink: 'https://twitter.com/GhedeoNts',
    },
    {
        iconsocial: IconBrandDiscord,
        pathLink: 'https://discordapp.com/users/938382315481075742',
    }];

export function ContactMe() {
    // eslint-disable-next-line no-empty-pattern
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        validate: {
            name: hasLength({ min: 2, max: 30 }, 'Le nom doit comporter 2 à 30 caractères'),
            email: isEmail('Adresse email non valide'),
            subject: isNotEmpty("L'objet du mail est obligatoire"),
            message: isNotEmpty('Le contenu du mail est obligatoire'),
        },

        transformValues: (values) => ({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
        }),
    });

    const handleError = (errors: typeof form.errors) => {
        if (errors.name) {
            showNotification({
                title: 'Erreur de validation',
                message: 'Veuillez remplir le champ Nom 🙂 !',
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.colors.blue },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            });
        } else if (errors.email) {
            showNotification({
                title: 'Erreur de validation',
                message: 'Veuillez remplir le champ Email 😅 !',
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.colors.blue },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            });
        } else if (errors.subject) {
            showNotification({
                title: 'Erreur de validation',
                message: 'Veuillez remplir le champ Objet 🫣 !',
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.colors.blue },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            });
        } else if (errors.message) {
            showNotification({
                title: 'Erreur de validation',
                message: 'Veuillez remplir le champ Message  😀 !',
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.colors.blue },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            });
        }
    };

    const loadingWithAnimationForm = () => setVisible((v) => !v);

    const RedirectingUsers = async () => router.reload();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSubmit = async (values: any) => {
        handleError;
        loadingWithAnimationForm();
        showNotification({
            id: 'load-data',
            loading: true,
            title: 'Chargement de vos données',
            message: 'Les données seront chargées dans 3 secondes, vous ne pouvez pas encore fermer cette fenêtre.',
            autoClose: 3000,
            disallowClose: true,
        });

        setTimeout(() => {
            updateNotification({
                id: 'load-data',
                color: 'teal',
                title: 'Les données ont été chargées',
                message: 'La notification se fermera dans 2 secondes, vous pouvez fermer cette notification maintenant.',
                icon: <IconCheck size={16} />,
                autoClose: 2000,
            });
        }, 3000);
        await sendContactForm(form.values);
        setTimeout(() => {
            RedirectingUsers();
        }, 3500);
    };

    const { classes } = useStyles();

    const icons = social.map((Icon, index) => (
        <ActionIcon
            component="a"
            href={Icon.pathLink}
            target="_blank"
            key={index}
            size={28}
            className={classes.social}
            variant="transparent"
        >
            <Icon.iconsocial
                size={22}
                stroke={1.5}
            />
        </ActionIcon>
    ));

    return (
        <Container size="md" mt={50}>
            <div id="ContactMe" className={classes.wrapper}>
                <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <div>
                        <Title className={classes.title}>Contactez-moi</Title>
                        <Text className={classes.description} mt="sm" mb={30}>
                            Laissez votre e-mail et je vous répondrai dans les 24 heures.
                        </Text>

                        <ContactIconsList />

                        <Group mt="xl">
                            {icons}
                        </Group>
                    </div>

                    <Box
                        component="form"
                        // eslint-disable-next-line max-len
                        onSubmit={(form.onSubmit((values) => handleSubmit(values)))}
                        className={classes.form}
                    >
                        {/* <Box component="form" onSubmit={form.onSubmit((values) => console.log(values))} className={classes.form}> */}
                        <TextInput
                            label="Nom"
                            placeholder="Ghedeon Ntsiassila"
                            withAsterisk
                            {...form.getInputProps('name')}
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                        />
                        <TextInput
                            label="Email"
                            placeholder="contact.ntsiassila@gmail.com"
                            withAsterisk
                            {...form.getInputProps('email')}
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                        // mt="md"

                        />
                        <TextInput
                            label="Objet"
                            placeholder="Opportunité de stage"
                            withAsterisk
                            {...form.getInputProps('subject')}
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}

                        />
                        <Textarea
                            label="Votre message"
                            placeholder={
                                'Bonjour Ghedeon,\n\nNous nous permettons de vous adresser ce message pour une offre de stage veillé nous contacter au : 06 24 62 76 70'
                            }
                            withAsterisk
                            {...form.getInputProps('message')}
                            minRows={5}
                            mt="md"
                            classNames={{ input: classes.input, label: classes.inputLabel }}

                        />

                        <Group position="right" mt="md">
                            <Button
                                size="sm"
                                radius="md"
                                type="submit"
                                // loading
                                // loaderPosition="center"
                                variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan' }}
                            >
                                {StringForAppFr.buttonTitle.sendMessage}
                            </Button>
                            <Button
                                size="sm"
                                radius="md"
                                // type="submit"
                                onClick={() => form.reset()}
                                className={classes.control}
                                loaderPosition="center"
                                variant="gradient"
                                gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                            >
                                {StringForAppFr.buttonTitle.resetMessage}
                            </Button>
                        </Group>
                    </Box>
                </SimpleGrid>
            </div>
        </Container>
    );
}
