// import { useState } from "react";
import { Container, Logo, Picture, Tweets, Followers } from "./UserCard.styled";

export const UserCard = () => {
  return (
    <>
      <Container>
        <Logo src="../images/Logo.png" alt="logo" width="76" height="22" />
        <Picture />
        <Tweets> 777 tweets</Tweets>
        <Followers>100,501 Followers</Followers>
      </Container>
    </>
  );
};
