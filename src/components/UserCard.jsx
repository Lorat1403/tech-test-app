// import { useState } from "react";
import { useState } from 'react';
import {
  Container,
  Logo,
  Picture,
  Tweets,
  Followers,
  Button,
} from './UserCard.styled';

export const UserCard = () => {
  const [followers, setFollowers] = useState([`100,501 Followers`]);
  const [button, setButton] = useState(['Follow']);

  return (
    <>
      <Container>
        <Logo src="../images/Logo.png" alt="logo" width="76" height="22" />
        <Picture />
        <Tweets> 777 tweets</Tweets>
        <Followers>{followers}</Followers>
        <Button>{button}</Button>
      </Container>
    </>
  );
};
