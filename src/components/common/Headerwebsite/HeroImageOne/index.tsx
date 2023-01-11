import { Container, Title, Text, Button } from '@mantine/core';
import { useStyles } from './styles';

export function HeroImageOne() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content} />
        </div>
      </Container>
    </div>
  );
}
