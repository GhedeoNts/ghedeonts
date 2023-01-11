import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Title, Avatar, Center, Group, Flex, UnstyledButton, Badge } from '@mantine/core';
import {
  IconStar,
} from '@tabler/icons';
import { useState, useEffect } from 'react';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import { useStyles } from './styles';
import ImageTemplatepProjectGithub from '../../assets/images/image-template-projects-github.png';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      ImageTemplatepProjectGithub,
    date: 'August 18, 2022',
    name: 'userProfil',
  },
];

export function SectionProjects() {
  const { classes } = useStyles();
  const [items, setItems] = useState([]);
  const [users] = useState('GhedeoNts');

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${users}/repos?page=1&per_page=10&sort=update`);
      const data = await res.json();
      setItems(data);
    };

    fetchRepos();
  }, []);

  const cards = items.map((prop:any) => (
    <Card key={prop.id} p="md" radius="md" component="a" href={prop.html_url} className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        {mockdata.map(imgsrc => (
          <Image src={imgsrc.image.src} />
        ))}
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {(new Date(prop.created_at)).toLocaleDateString()}
      </Text>
      <Text
        component="a"
        href={prop.html_url}
        target="_blank"
        className={classes.title}
        mt={5}
      >
        {prop.name}
      </Text>
      <Group mt={5}>
        {
          prop.private ? <Badge color="red">Private</Badge> : <Badge color="teal">Public</Badge>
        }
        {
          prop.language
            ? <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{prop.language}</Badge>
            : ''
        }
      </Group>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'center' }}
      />
      <Group position="apart" className={classes.footer}>
        <Center>
          <Avatar<'a'>
            component="a"
            href={prop.owner.html_url}
            src={prop.owner.avatar_url}
            size="md"
            radius="xl"
            mr="xs"
          />
          <Text
            component="a"
            href={prop.owner.html_url}
            size="sm"
            inline
          >
            {prop.owner.login}
          </Text>
        </Center>
        <Group position="right">
          <UnstyledButton>
            <IconStar size={16} />&nbsp;{prop.stargazers_count.toLocaleString()}&nbsp;Stars
          </UnstyledButton>
          <UnstyledButton><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>&nbsp; {prop.watchers_count.toLocaleString()}&nbsp;Watchers</UnstyledButton>
        </Group>
      </Group>
    </Card>
  ));

  return (
    <Container py="xl" id="project">
      <Title order={3} pb={30}>
        {StringForAppFr.Profile.ProjectSection.title}
      </Title>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
