import { Flex } from '@mantine/core';

export function ContainerFlex({ children }:any): JSX.Element {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      {children}
    </Flex>
  );
}
