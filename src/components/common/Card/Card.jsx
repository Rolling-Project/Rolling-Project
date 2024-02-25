import * as Styled from "./Card.styled";
import a from "../../../assets/user-profile.png"
import PurpleBackgroundImg from "../../../assets/purple-circle.svg";
import BeigeBackgroundImg from "../../../assets/beige-rectangle.svg";
import GreenBackgroundImg from "../../../assets/green-circle.svg";
import BlueBackgroundImg from "../../../assets/blue-triangle.svg";

const backgroundImg = {
  "purple": PurpleBackgroundImg,
  "beige": BeigeBackgroundImg,
  "green": GreenBackgroundImg,
  "blue": BlueBackgroundImg,
};

const colorConveter = (color) => {
  switch(color){
    case "beige": return "Orange-200"; 

    case "blue": return "Blue-200";

    case "green": return "Green-200";
    
    case "purple": return "Purple-200";
  }
}

function Card({ data }) {
  return (
    <Styled.Card $color={colorConveter(data.backgroundColor)}>
      <Styled.Recipient>To. {data.name}</Styled.Recipient>
      <Styled.RecentMessageBox>
        <Styled.RecentMessage src={a} />
        <Styled.RecentMessage src={a} />
        <Styled.RecentMessage src={a} />
        <Styled.Additional>+27</Styled.Additional>
      </Styled.RecentMessageBox>
      <Styled.MessageCount>
        <Styled.TextBoldEffect>30</Styled.TextBoldEffect>
        명이 작성했어요!
      </Styled.MessageCount>
      <Styled.ReactionBox>
        <Styled.TopReaction>👍 20</Styled.TopReaction>
        <Styled.TopReaction>🚨 22</Styled.TopReaction>
        <Styled.TopReaction>🙃 3</Styled.TopReaction>
      </Styled.ReactionBox>
      <Styled.back src={backgroundImg[data.backgroundColor]} />
    </Styled.Card>
  );
}

export default Card;
