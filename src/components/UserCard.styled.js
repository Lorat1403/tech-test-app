import styled from '@emotion/styled';
import picture from '../images/picture2 1.png';

export const Container = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  margin-top: 168px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  justify-content: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  ${
    '' /* width: 76px;
  height: 22px; */
  }
  left: 20px;
  top: 20px;
`;

export const Picture = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
  background-image: url(${picture});
`;

export const Tweets = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  padding-top: 250px;
`;

export const Followers = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  padding-top: 16px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin: auto;
  margin-top: 26px;
  position: relative;
  width: 196px;
  height: 50px;
  border: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
