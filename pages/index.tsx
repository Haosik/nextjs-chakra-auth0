import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { Heading, Link, Flex } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
  const useMarquee = () => {
    const DISPLAY_TEXT =
      'wow   such next.js   very react   much title   so marquee   ';

    const [text, setText] = useState(DISPLAY_TEXT);
    useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
        setText(DISPLAY_TEXT.substring(i) + DISPLAY_TEXT.substring(0, i));
        i = (i + 1) % DISPLAY_TEXT.length;
      }, 300);
      return () => clearInterval(timer);
    }, []);

    return text;
  };

  const myText = useMarquee();

  return (
    <>
      <Head>
        <title>{myText}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="My super puper nextjs site :)" />
      </Head>
      <Head>
        <meta name="author" content="Haosik"></meta>
      </Head>
      <Flex flexDirection="column" alignItems="center" margin={4}>
        <div>{myText}</div>
        <Heading as="h1" size="2xl" marginY="2rem">
          Index Page! Hello world!
        </Heading>

        <NextLink href="/about" passHref>
          <Link>Link to About page</Link>
        </NextLink>

        <NextLink href="/user/3" passHref>
          <Link>Link to user info</Link>
        </NextLink>

        <NextLink href="/blog" passHref>
          <Link>Link to Blog</Link>
        </NextLink>

        <NextLink href="/secret" passHref>
          <Link>Link to Secret</Link>
        </NextLink>
      </Flex>
    </>
  );
};

export default IndexPage;
