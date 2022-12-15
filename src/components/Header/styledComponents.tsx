import styled from "styled-components";
import HeadImage from "../../assets/images/Afstand_Wallpaper.png";

export const Header = styled.header`
  width: 1200px;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  font-size: 2rem;
  text-align: center;
  background: #336699;

  @media screen and (max-width: 576px) {
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Image = styled.img.attrs({
  src: HeadImage,
})`
  width: 100%;
`;

export const XList = styled.ul`
  width: 100%;
  display: flex;

  @media screen and (max-width: 576px) {
    width: 30%;
    position: absolute;
    display: block;
  }
`;

export const LiItem = styled.li`
  font-size: 1rem;
  margin-right: 1rem;
  border-bottom: 1px solid white;
`;

export const Button = styled.button`
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    background: gray;
  }

  @media screen and (max-width: 576px) {
    color: black;
  }
`;
