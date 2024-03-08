import { useState } from 'react';
import styled from '@emotion/styled';
import Avatar from '../components/RollingPager/Avatar';
import { InputLabel, Select, FormControl, MenuItem, TextField } from '@mui/material';
import useSendMessage from '../utils/hooks/useSendMessage';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    max-width: 720px;
  }
`;

const Content = styled.div`
  display: grid;
`;

const Profile = styled.div`
  display: flex;
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
  const [selectedOption, setSelectedOption] = useState('');

  const [age, setAge] = useState('');

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Content>
          <div>
            <label>From.</label>
            <TextField variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
            <InputLabel />
          </div>
          <div>
            <label>프로필 이미지</label>
            <Profile>
              <Avatar width="80px" height="80px" />
              <Avatar width="56px" height="56px" onClick={() => handleImageSelect('image1.jpg')} />
              <Avatar width="56px" height="56px" onClick={() => handleImageSelect('image2.jpg')} />
              <Avatar width="56px" height="56px" onClick={() => handleImageSelect('image3.jpg')} />
            </Profile>
          </div>
          <FormControl fullWidth>
            <Select value={relationship} onChange={(e) => setRelationship(e.target.value)} displayEmpty>
              <MenuItem value="지인">지인</MenuItem>
              <MenuItem value="동료">동료</MenuItem>
              <MenuItem value="가족">가족</MenuItem>
              <MenuItem value="친구">친구</MenuItem>
            </Select>
          </FormControl>
          <div>
            <label>내용을 입력해주세요</label>
            <TextField variant="outlined" fullWidth value={content} onChange={(e) => setContent(e.target.value)} />
            <InputLabel />
          </div>
          <FormControl fullWidth>
            <Select value={font} onChange={(e) => setFont(e.target.value)} displayEmpty>
              <MenuItem value="Noto Sans">
                <em>Noto Sans</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Content>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default MessageAddPage;
