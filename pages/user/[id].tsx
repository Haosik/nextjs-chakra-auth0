import { GetServerSideProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Flex, Link, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import fetch from 'node-fetch';
import React from 'react';
import ErrorPage from 'next/error';

export interface IUserData {
  id: string;
  name: string;
  email: string;
}

const UserPage: NextPage<{ data?: IUserData }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" marginY="2rem">
          User
        </Heading>

        <SimpleGrid columns={2} width="2xs" spacingY={4}>
          <Text fontWeight="bold" marginRight={4}>
            UserID
          </Text>
          <Text>{props.data.id}</Text>

          <Text fontWeight="bold" marginRight={4}>
            User Name
          </Text>
          <Text>{props.data.name}</Text>

          <Text fontWeight="bold" marginRight={4}>
            User Email
          </Text>
          <Text>{props.data.email}</Text>
        </SimpleGrid>

        <NextLink href="/" passHref>
          <Link marginY="2rem">
            <Text fontStyle="italic">Back to welcome page</Text>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

// Be sure to EXPORT this func :)
export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { id } = params;

    const result = await fetch(`http://localhost:3000/api/user/${id}`);

    const data: IUserData = await result.json();

    console.log(data);

    return {
      props: { data },
    };
  } catch (err) {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default UserPage;
