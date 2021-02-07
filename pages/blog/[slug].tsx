import React from 'react';
import NextLink from 'next/link';
import { Text, Flex, Heading, Link, Box } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';

export interface IBlogPageProps {
  title: string;
  text: string;
}

const BlogPage = (props: IBlogPageProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Box maxW="container.lg">
        <NextLink href="/blog" passHref>
          <Link>Blog</Link>
        </NextLink>
        <Heading as="h1" size="xl" marginY={4}>
          {props.title}
        </Heading>
        <Text>{props.text}</Text>
      </Box>
    </Flex>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import('../../lib/blogs.json')).default;
  const slugs = blogs.map((blog) => blog.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  // IRL we'd fetch exactly that one post
  const blogs = (await import('../../lib/blogs.json')).default;

  const blog = blogs.find((x) => x.slug === slug);

  // Pass post data to the page via props
  return {
    props: {
      title: blog.title,
      text: blog.text,
    },
  };
};

export default BlogPage;
