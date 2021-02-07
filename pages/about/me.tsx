import NextLink from 'next/link';
import { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';

const MePage: NextPage = () => {
  return (
    <>
      <Heading as="h1" size="2xl">
        Me Page
      </Heading>
      <NextLink href="/">Link to Index page</NextLink>
    </>
  );
};

export default MePage;
