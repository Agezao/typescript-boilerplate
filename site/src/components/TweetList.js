import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Box,
  Heading,
  Skeleton,
} from "@chakra-ui/core";
import Tweet from './Tweet';
import { queries } from '../services/tweet.service';

export default () => {
  const { loading, error, data } = useQuery(queries.listTweets);

  if (loading) {
    return (
    <Box
      width="100%"
    >
      <Heading marginBottom={3} size="xl">Tweets</Heading>
      <Skeleton height="100px"></Skeleton>
      <Skeleton height="100px" marginTop={4}></Skeleton>
      <Skeleton height="100px" marginTop={4}></Skeleton>
      <Skeleton height="100px" marginTop={4}></Skeleton>
    </Box>);
  }

  if (error) return <p>Error :(</p>;

  return (
    <Box
      width="100%"
    >
      <Box d="flex" justifyContent="space-between" >
        <Heading marginBottom={3} size="xl">Tweets</Heading>
      </Box>

      { data.tweets.map(tweet => <Tweet tweet={tweet} />) }
    </Box>
  );
}
