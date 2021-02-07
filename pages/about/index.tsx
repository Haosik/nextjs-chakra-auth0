import NextLink from 'next/link';
import { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';

const AboutPage: NextPage = () => {
  return (
    <>
      <Heading as="h1" size="2xl">
        About Page
      </Heading>
      <NextLink href="/">Link to Index page</NextLink>
      <NextLink href="/about/me">Link to Me page</NextLink>
    </>
  );
};

export default AboutPage;
