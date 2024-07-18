import styled from "styled-components";
import HeadImage from "../../assets/images/Afstand_Wallpaper.png";

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  font-size: 2rem;
  text-align: center;
  background: #4e6e62;

  @media screen and (max-width: 576px) {
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
  }
`;

export const Image = styled.img.attrs({
  src: HeadImage,
})`
  width: 3rem;
  position: absolute;
  right: 1rem;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const XList = styled.ul`
  width: 100%;
  display: flex;

  @media screen and (max-width: 576px) {
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const LiItem = styled.li`
  font-size: 1rem;
  margin-right: 1rem;
`;

export const Button = styled.button`
  color: #dcdddf;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid white;

  &:hover {
    background: #728a7a;
  }

  @media screen and (max-width: 576px) {
    background: #d8c6ba;
    color: black;
    border-radius: 5rem;
    border-bottom: none;
  }
`;

export const CenterDiv = styled.div`
  width: 1200px;
  margin-bottom: 1rem;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`;
