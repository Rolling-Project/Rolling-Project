import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Avatar from '../components/RollingPager/Avatar';
import { InputLabel, FormControl, MenuItem, TextField } from '@mui/material';
import useSendMessage from '../utils/hooks/useSendMessage';
import colors from '../styles/colors';
import arrowDownIcon from '../assets/arrow_down.svg';
import { Primary56Button } from '../components/common/Button/Button';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  form {
    width: 100%;
    max-width: 45rem;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 50px;
  margin-top: 47px;
`;

const Profile = styled.div`
  display: flex;
`;

const Name = styled.div``;

const Relationship = styled.div``;

const TextEditor = styled.div``;

const Font = styled.div``;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors['--Gray-300']};
`;

const Select = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
  cursor: pointer;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${arrowDownIcon}) no-repeat 97% 50% / auto;

    border-radius: 0.5rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${colors['--Gray-300']};
    &:focus {
      outline: none;
      border: 2px solid ${colors['--Gray-500']};
    }
  }
`;

const Label = styled.label`
  color: ${colors['--Gray-900']};
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
`;

function MessageAddPage() {
  const { id: recipientId } = useParams();
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState(
    'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8'
  );
  const [relationship, setRelationship] = useState('지인');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('Noto Sans');
  const { mutate } = useSendMessage();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      sender: name,
      relationship,
      content,
      font,
      profileImageURL: selectedImage
    };
    mutate({ recipientId, data });

    console.log({ name, selectedImage, relationship, content, font });
  };

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Content>
          <Name>
            <Label htmlFor="name">From.</Label>
            <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Name>

          <div>
            <Label>프로필 이미지</Label>
            <Profile>
              <Avatar width="80px" height="80px" />
              <Avatar width="56px" height="56px" onClick={() => handleImageSelect('image1.jpg')} />
              <Avatar width="56px" height="56px" onClick={() => handleImageSelect('image2.jpg')} />
              <Avatar width="56px" height="56px" onClick={() => handleImageSelect('image3.jpg')} />
            </Profile>
          </div>

          <Relationship>
            <Label htmlFor="font">상대와의 관계</Label>
            <Select>
              <select value={relationship} onChange={(e) => setRelationship(e.target.value)} displayEmpty>
                <option value="지인">지인</option>
                <option value="동료">동료</option>
                <option value="가족">가족</option>
                <option value="친구">친구</option>
              </select>
            </Select>
          </Relationship>

          <TextEditor>
            <Label>내용을 입력해주세요</Label>
            <TextField variant="outlined" fullWidth value={content} onChange={(e) => setContent(e.target.value)} />
            <InputLabel />
          </TextEditor>

          <Font>
            <Label htmlFor="font">폰트 선택</Label>
            <Select>
              <select
                value={font}
                name="font"
                id="font"
                onChange={(e) => setFont(e.target.value)}
                defaultValue="Noto Sans"
              >
                <option value="Noto Sans">Noto Sans</option>
                <option value="나눔명조">나눔명조</option>
                <option value="나눔손글씨 손편지체">나눔손글씨 손편지체</option>
              </select>
            </Select>
          </Font>
        </Content>

        <Primary56Button type="submit" disabled={!name.trim()}>
          생성하기
        </Primary56Button>
      </form>
    </Container>
  );
}

export default MessageAddPage;
