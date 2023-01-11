import { Container, Text } from '@mantine/core';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';

export function SectionDescription() {
  return (
    <Container size="md" pt={25} pb={25}>
      <Text align="justify" lineClamp={6}>{StringForAppFr.Profile.description}</Text>
    </Container>
  );
}
