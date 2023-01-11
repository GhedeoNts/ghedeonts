/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import { Container, Title, Text, Button } from '@mantine/core';
import { useStyles } from './styles';

export function HeroImageTwo() {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            "Tout d'abord,{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                résolvez
                            </Text>{' '}
                            le problème.
                            Ensuite, écrivez le code."
                        </Title>

                        <Text className={classes.description} mt={30}>
                            - John Johnson
                        </Text>

                        <Button
                            component="a"
                            href="#ContactMe"
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            size="sm"
                            className={classes.control}
                            mt={40}
                        >
                            Contactez-Moi
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
