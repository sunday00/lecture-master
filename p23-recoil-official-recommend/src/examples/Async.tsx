import { Container, Heading, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { atomFamily, selectorFamily, useRecoilValue, useSetRecoilState } from 'recoil';
import { Suspense, useState } from 'react';
import { getWeather } from './FakeApi';

// const userIdState = atom<number | undefined>({
//   key: 'userId',
//   default: undefined
// });

const userState = selectorFamily({
  key: 'user',
  get: (userId: number) => async () => {
    if(userId === 0) return null
    return await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(res => res.json());
  }
});

const weatherRequestIdState = atomFamily({
  key: 'weatherRequestId',
  default: 0,
})

const useRefetchWeather = (userId: number) => {
  const setRequestId = useSetRecoilState(weatherRequestIdState(userId))
  return () => setRequestId((id) => id + 1)
}


const weatherState = selectorFamily({
  key: 'weather',
  get: (userId: number) => async ({get}) => {
    if(userId === 0) return null

    get(weatherRequestIdState(userId))

    const user = get(userState(userId))
    const weather = await getWeather(user.address.city)
    return weather
  }
})

const UserWeather = ({userId}: {userId: number}) => {
  const user = useRecoilValue(userState(userId as number));

  const weather = useRecoilValue(weatherState(userId))

  const refetch = useRefetchWeather(userId)

  return <div>
    <Text>
      <b>Weather for {user.address.city}:</b> {weather} °C
    </Text>
    <Text onClick={refetch}>
      (refresh weather)
    </Text>
  </div>
}

const UserData = ({userId} : {userId: number}) => {
  const user = useRecoilValue(userState(userId as number));

  if(!user) return null

  return (
    <div>
      <Heading as='h2' size='md' mb={1}>
        User data:
      </Heading>
      <Text>
        <b>Name:</b> {user.name}
      </Text>
      <Text>
        <b>Phone:</b> {user.phone}
      </Text>
      <Suspense fallback={<div>Weather loading...</div>}>
        <UserWeather userId={userId} />
      </Suspense>
    </div>
  );
};

export const Async = () => {
  // const [userId, setUserId] = useRecoilState(userIdState);
  const [userId, setUserId] = useState<number>(0);

  return (
    <Container py={10}>
      <Heading as='h1' mb={4}>
        View Profile
      </Heading>
      <Heading as='h2' size='md' mb={1}>
        Choose a user:
      </Heading>
      <Select
        placeholder='Choose a user'
        mb={4}
        value={userId}
        onChange={(event) => {
          const value = event.target.value;
          setUserId(value ? parseInt(value) : 0);
        }}
      >
        <option value='1'>User 1</option>
        <option value='2'>User 2</option>
        <option value='3'>User 3</option>
      </Select>
      <Suspense fallback={<div>Loading...</div>}>
        <UserData userId={userId}></UserData>
      </Suspense>
    </Container>
  );
};