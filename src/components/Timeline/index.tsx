import { Title, Timeline, Text, Container } from '@mantine/core';
import {
  IconGitPullRequest,
  IconCode,
  IconShoppingCart,
  IconCodePlus,
  IconFileCode,
} from '@tabler/icons';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import { ContainerFlex } from '../common/Containerflex';

export function TimeLine(): JSX.Element {
  return (
    <Container>
      <ContainerFlex>
        <Timeline id="TrainingsAndEducations" active={1} bulletSize={24} lineWidth={2}>
          <Title order={3} pb={40}>
            {StringForAppFr.Profile.ProfessionalExperiences.title}
          </Title>
          <Timeline.Item
            bullet={<IconCode size={12} />}
            title={StringForAppFr.Profile.ProfessionalExperiences.experienceOne.title}
          >
            <Text color="dimmed" size="sm">
              {StringForAppFr.Profile.ProfessionalExperiences.experienceOne.description}{' '}
              <Text variant="link" component="span" inherit>
                {StringForAppFr.Profile.ProfessionalExperiences.experienceOne.country}
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              {StringForAppFr.Profile.ProfessionalExperiences.experienceOne.date}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconShoppingCart size={12} />}
            title={StringForAppFr.Profile.ProfessionalExperiences.experienceTwo.title}
          >
            <Text color="dimmed" size="sm">
              {StringForAppFr.Profile.ProfessionalExperiences.experienceTwo.description}{' '}
              <Text variant="link" component="span" inherit>
                {StringForAppFr.Profile.ProfessionalExperiences.experienceTwo.country}
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              {StringForAppFr.Profile.ProfessionalExperiences.experienceTwo.date}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={StringForAppFr.Profile.ProfessionalExperiences.experienceThree.title}
            bullet={<IconShoppingCart size={12} />}
            lineVariant="dashed"
            pb={25}
          >
            <Text color="dimmed" size="sm">
              {StringForAppFr.Profile.ProfessionalExperiences.experienceThree.description}
              <Text variant="link" component="span" inherit>
                {' '}
                {StringForAppFr.Profile.ProfessionalExperiences.experienceThree.country}
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              {StringForAppFr.Profile.ProfessionalExperiences.experienceThree.date}
            </Text>
          </Timeline.Item>
        </Timeline>{' '}
        <Timeline id="ProfessionalExperiences" active={1} bulletSize={24} lineWidth={2}>
          <Title order={3} pb={40}>
            {StringForAppFr.Profile.TrainingsAndEducations.title}
          </Title>
          <Timeline.Item
            bullet={<IconCodePlus size={12} />}
            title={StringForAppFr.Profile.TrainingsAndEducations.TrainingOne.title}
          >
            <Text color="dimmed" size="sm">
              {StringForAppFr.Profile.TrainingsAndEducations.TrainingOne.description}{' '}
              <Text variant="link" component="span" inherit>
                {StringForAppFr.Profile.TrainingsAndEducations.TrainingOne.country}
              </Text>{' '}
            </Text>
            <Text size="xs" mt={4}>
              {StringForAppFr.Profile.TrainingsAndEducations.TrainingOne.date}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconFileCode size={12} />}
            title={StringForAppFr.Profile.TrainingsAndEducations.TrainingTwo.title}
          >
            <Text color="dimmed" size="sm">
              {StringForAppFr.Profile.TrainingsAndEducations.TrainingTwo.description}
              <Text variant="link" component="span" inherit>
                {' '}
                {StringForAppFr.Profile.TrainingsAndEducations.TrainingTwo.country}
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              {StringForAppFr.Profile.TrainingsAndEducations.TrainingTwo.date}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={StringForAppFr.Profile.TrainingsAndEducations.TrainingThree.title}
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="sm">
              {StringForAppFr.Profile.TrainingsAndEducations.TrainingThree.description}
              <Text variant="link" component="span" inherit>
                {' '}
                {StringForAppFr.Profile.TrainingsAndEducations.TrainingThree.country}
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              {StringForAppFr.Profile.TrainingsAndEducations.TrainingThree.date}
            </Text>
          </Timeline.Item>
        </Timeline>
      </ContainerFlex>
    </Container>
  );
}
