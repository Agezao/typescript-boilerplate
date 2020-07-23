import React from 'react';
import {
  Box,
  Heading,
  Badge,
  Text,
} from "@chakra-ui/core";
import moment from 'moment';

export default ({ tweet } = {}) => {
  return (
    <Box
      minHeight="50px"
      border="2px"
      backgroundColor="transparent"
      px={6}
      py={4}
      marginBottom={4}
      rounded={5}
      key={tweet._id}
    >
      <Heading as="h3" size="lg">
        { tweet.message }
      </Heading>

      <Box d="flex" alignItems="baseline" marginTop={1}>
        <Badge rounded="full" px="3" variantColor="blue" color="white">
          { moment.unix(tweet.createdAt/1000).format('MM/DD/YYYY HH:mm') }
        </Badge>
      </Box>

      <Box
        marginTop={2}
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        ml="2"
      >
        <Box>
          <Text fontSize="md" as="h3">&gt; { tweet.user.name } ({ tweet.user.email })</Text>
        </Box>
      </Box>
    </Box>
  );
};
