/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ComponentPageNotFound } from '../components/common/ComponentPageNotFound';

function PageNotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/accueil');
        }, 25000);
    }, []);

    return (<ComponentPageNotFound />);
}

export default PageNotFound;
