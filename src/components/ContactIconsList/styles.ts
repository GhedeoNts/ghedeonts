import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.white,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            // display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
    },
}));
