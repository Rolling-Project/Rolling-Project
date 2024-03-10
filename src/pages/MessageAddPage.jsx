import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Avatar from '../components/RollingPaper/Avatar';
import useSendMessage from '../utils/hooks/useSendMessage';
import colors from '../styles/colors';
import arrowDownIcon from '../assets/arrow_down.svg';
import { Primary56Button } from '../components/common/Button/Button';
import PROFILE_IMG from '../utils/constants/profileImages';

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
  margin-top: 2.94rem;
  margin-bottom: 3.87rem;
`;

const Profiles = styled.ul`
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
`;

const Profile = styled.li`
  border-radius: 50%;
  border: ${(props) => (props.isSelected ? `0.13rem solid ${colors['--Purple-600']}` : 'none')};
`;

const Name = styled.div``;

const Relationship = styled.div``;

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
  display: inline-block;
  margin-bottom: 0.75rem;
`;

const TextEditor = styled.div`
  .toastui-editor-contents {
    font-size: 1.125rem;
    font-family: ${({ font }) => font};
  }
  @media (max-width: 570px) {
    max-width: 20rem;
  }
`;

function MessageAddPage() {
  const { id: recipientId } = useParams();
  const [name, setName] = useState('');
  const [image, setImage] = useState(PROFILE_IMG[0]);
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
      profileImageURL: image.url
    };
    mutate({ recipientId, data });
  };

  const editorRef = useRef();

  const handleEditor = () => {
    const data = editorRef.current.getInstance().getHTML();
    setContent(data);
  };

  const isEmptyText = () => {
    if (content) {
      const parser = new DOMParser();
      const innerText = parser.parseFromString(content, 'text/html');
      return innerText?.body.firstChild.textContent.trim() && name.trim();
    }
    return null;
  };

  const handleProfile = (profile) => {
    setImage(profile);
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
            <p>프로필 이미지를 선택해주세요</p>
            <Profiles>
              {PROFILE_IMG.map((profile) => (
                <Profile key={profile.id} isSelected={image === profile}>
                  <Avatar width="5rem" height="5rem" imgUrl={profile.img} onClick={() => handleProfile(profile)} />
                </Profile>
              ))}
            </Profiles>
          </div>

          <Relationship>
            <Label htmlFor="font">상대와의 관계</Label>
            <Select>
              <select value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                <option value="지인">지인</option>
                <option value="동료">동료</option>
                <option value="가족">가족</option>
                <option value="친구">친구</option>
              </select>
            </Select>
          </Relationship>

          <TextEditor font={font}>
            <Label>내용을 입력해주세요</Label>
            <Editor
              toolbarItems={[
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol']
              ]}
              initialValue=" "
              height="16.25rem"
              initialEditType="wysiwyg"
              hideModeSwitch
              language="ko-KR"
              ref={editorRef}
              onChange={handleEditor}
              useCommandShortcut
            />
          </TextEditor>

          <Font>
            <Label htmlFor="font">폰트 선택</Label>
            <Select>
              <select value={font} name="font" id="font" onChange={(e) => setFont(e.target.value)}>
                <option value="Noto Sans">Noto Sans</option>
                <option value="Pretendard">Pretendard</option>
                <option value="나눔명조">나눔명조</option>
                <option value="나눔손글씨 손편지체">나눔손글씨 손편지체</option>
              </select>
            </Select>
          </Font>
        </Content>

        <Primary56Button type="submit" disabled={!isEmptyText()}>
          생성하기
        </Primary56Button>
      </form>
    </Container>
  );
}

export default MessageAddPage;
