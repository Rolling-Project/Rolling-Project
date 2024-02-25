import * as Styled from "./Card.styled";
import a from "../../../assets/user-profile.png"
import PurpleBackgroundImg from "../../../assets/purple-circle.svg";
import BeigeBackgroundImg from "../../../assets/beige-rectangle.svg";
import GreenBackgroundImg from "../../../assets/green-circle.svg";
import BlueBackgroundImg from "../../../assets/blue-triangle.svg";
const PURPLE = "Purple-200";
const BEIGE = "Orange-200";
const GREEN = "Green-200";
const BLUE = "Blue-200";

const backgroundImg = {
  [PURPLE]: PurpleBackgroundImg,
  [BEIGE]: BeigeBackgroundImg,
  [GREEN]: GreenBackgroundImg,
  [BLUE]: BlueBackgroundImg,
};

function Card({ text, color }) {
  return (
    <Styled.Card $color={color}>
      <Styled.Recipient>To. {text}</Styled.Recipient>
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
      <Styled.back src={backgroundImg[color]} />
    </Styled.Card>
  );
}

export default Card;
