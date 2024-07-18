import {
  Header,
  Image,
  XList,
  LiItem,
  Button,
  CenterDiv,
} from "./styledComponents";
import { HeadMenuButton } from "../../consts/ButtonList";
import { useNavigate } from "react-router";

const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <CenterDiv>
        <Header>
          <XList>
            {HeadMenuButton.map((buttonItem) => {
              return (
                <LiItem key={buttonItem.ID}>
                  <Button
                    onClick={() => {
                      navigate(buttonItem.path);
                    }}
                  >
                    {buttonItem.text}
                  </Button>
                </LiItem>
              );
            })}
          </XList>
          <Image />
        </Header>
      </CenterDiv>
    </>
  );
};

export default PageHeader;
