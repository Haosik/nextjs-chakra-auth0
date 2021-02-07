import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Heading, Link, Flex, Text } from '@chakra-ui/react';

export interface IBlogType {
  slug: string;
  title: string;
  text: string;
}

export interface IBlogIndexPageProps {
  blogs: IBlogType[];
}

const BlogIndexPage: NextPage<IBlogIndexPageProps> = (props) => (
  <Box>
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        Table of Contents
      </Heading>

      {props.blogs.map((blog) => (
        <NextLink
          key={blog.slug}
          as={`/blog/${blog.slug}`}
          href={`/blog/[slug]`}
          passHref
        >
          <Link>
            <Heading as="h3" size="lg">
              {blog.title}
            </Heading>
          </Link>
        </NextLink>
      ))}
      <NextLink href="/" passHref>
        <Link marginY="2rem">
          <Text fontStyle="italic">Back to welcome page</Text>
        </Link>
      </NextLink>
    </Flex>
  </Box>
);

export const getStaticProps: GetStaticProps = async () => {
  const blogs = (await import('../../lib/blogs.json')).default;

  return {
    props: { blogs },
  };
};

export default BlogIndexPage;
