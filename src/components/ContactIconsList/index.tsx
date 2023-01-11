import { Flex } from '@mantine/core';
import { StringForAppFr } from '../../assets/utils/lang/StringForAppFr';
import { ContactIcons } from '../ContactIcons';
import { useStyles } from './styles';

export function ContactIconsList() {
  const { classes } = useStyles();

  return (
    <Flex
      style={{ width: 285, height: 200, color: '#fff' }}
      mih={50}
      gap="md"
      justify="center"
      align="flex-start"
      direction="column"
      wrap="wrap"
    >
      <ContactIcons>
        <div style={{ marginRight: 3 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-at"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
          </svg>
        </div>
        <>
          <div>
            <div className="mantine-Text-root mantine-1rx1rky">Email</div>
            <div className="mantine-Text-root mantine-8zva79">
              <a
                href="mailto:contact.ntsiassila@gmail.com"
                className={classes.link}
              >
                {StringForAppFr.Profile.identity.SocialMediaProfile.AddressMail.title}
              </a>
            </div>
          </div>
        </>
      </ContactIcons>
      <ContactIcons>
        <div style={{ marginRight: 3 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-phone"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
        </div>
        <>
          <div>
            <div className="mantine-Text-root mantine-1rx1rky">Number Phone</div>
            <div className="mantine-Text-root mantine-8zva79">
              <a
                href="tel:+33624627670"
                className={classes.link}
              >
                {StringForAppFr.Profile.identity.phone}
              </a>
            </div>
          </div>
        </>
      </ContactIcons>
      <ContactIcons>
        <div style={{ marginRight: 3 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
        </div>
        <>
          <div>
            <div className="mantine-Text-root mantine-1rx1rky">Localisation</div>
            <div className="mantine-Text-root mantine-8zva79">
              <a
                href="https://goo.gl/maps/6HRFVpLrPxfMEtby5"
                className={classes.link}
              >
                {StringForAppFr.Profile.identity.location}
              </a>
            </div>
          </div>
        </>
      </ContactIcons>
    </Flex>
  );
}
