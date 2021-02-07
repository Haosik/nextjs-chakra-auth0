import { NextPage } from 'next';
import NextLink from 'next/link';
import { Heading, Link, Flex } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        Index Page! Hello world!
      </Heading>

      <NextLink href="/about" passHref>
        <Link>Link to About page</Link>
      </NextLink>

      <NextLink href="/blog" passHref>
        <Link>Link to Blog</Link>
      </NextLink>
    </Flex>
  );
};

export default IndexPage;
