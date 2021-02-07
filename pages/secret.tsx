import NextLink from 'next/link';
import Router from 'next/router';
import { Heading, Link, Flex, Box, Button, Code, Text } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import auth0 from '../lib/auth0';

export interface ISecretPageProps {
  username?: string;
  error?: string;
}

const SecretPage: NextPage<ISecretPageProps> = (props) => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Flex>
      <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Heading as="h2" size="lg" margin="1rem">
          {props.error ? 'You are not logged in' : 'Welcome'}
        </Heading>
        <Code margin="1rem">{props.error ?? props.username}</Code>
        <Button
          colorScheme="blue"
          margin="1rem"
          onClick={() =>
            Router.push(props.error ? `/api/login` : `/api/logout`)
          }
        >
          {props.error ? 'Log in' : 'Log out'}
        </Button>
        <NextLink href="/" passHref>
          <Link marginY="2rem">
            <Text fontStyle="italic">Back to welcome page</Text>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const { user } = await auth0.getSession(req);
    return {
      props: {
        username: user.name,
      },
    };
  } catch (error) {
    return {
      props: { error: error.message },
    };
  }
};

export default SecretPage;
