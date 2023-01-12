/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Title, Text, Button, Container, Group, Anchor } from '@mantine/core';
import { useStyles } from './styles';

export function ComponentPageNotFound():JSX.Element {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Quelque chose ne va pas...</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
      La page que vous essayez d'ouvrir n'existe pas. Vous avez peut-être fait une erreur de frappe dans la barre d'adresse, ou la page a été déplacée vers une autre URL. Si vous pensez qu'il s'agit d'une erreur, veillez cliqué : <Anchor href="mailto:contact.ntsiassila@gmail.com">ici</Anchor>, pour m'envoyer un mail et je vous répondrai dans les 24 heures.<br />Sans action de votre part dans 25 secondes, vous serez redirigé sur la page d'accueil..
      </Text>
      <Group position="center">
        <Button component="a" href="/accueil" variant="subtle" size="md">
        Retourner à la page d'accueil
        </Button>
      </Group>
    </Container>
  );
}
