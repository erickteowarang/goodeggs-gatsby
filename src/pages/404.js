import * as React from 'react';
import Layout from 'components/organisms/Layout';
import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Link from 'components/atoms/Link';
import { Heading, Text } from 'components/atoms/Typography';

export default function NotFound() {
  return (
    <Layout title="404: Page not found">
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading variant="mega">404</Heading>
            <Heading as="h1">Page not found</Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead">
                Sorry! We couldn’t find the page you were looking for.
              </Text>
              <Link to="/">
                <span>Back to home</span>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
