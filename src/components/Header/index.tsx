import { Header, Image, XList, LiItem, Button } from "./styledComponents";
import { HeadMenuButton } from "../../consts/ButtonList";

const PageHeader = () => {
  function ClickHandler(index: string) {
    alert(`Oh Ho~ I'm ${index}`);
  }

  return (
    <>
      <Header>
        <XList>
          {HeadMenuButton.map((buttonItem) => {
            return (
              <LiItem>
                <Button
                  onClick={() => {
                    ClickHandler(buttonItem.ID);
                  }}
                >
                  {buttonItem.text}
                </Button>
              </LiItem>
            );
          })}
        </XList>
      </Header>
      <Image />
    </>
  );
};

export default PageHeader;
