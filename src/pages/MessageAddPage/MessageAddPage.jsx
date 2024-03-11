import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { Helmet } from 'react-helmet-async';
import '@toast-ui/editor/dist/toastui-editor.css';
import Avatar from '../../components/RollingPaper/Avatar/Avatar';
import useSendMessage from '../../utils/hooks/useSendMessage';
import { Primary56Button } from '../../components/common/Button/Button';
import PROFILE_IMG from '../../utils/constants/profileImages';
import * as S from './MessageAddPage.styled';

function MessageAddPage() {
  const { id: recipientId } = useParams();
  const editorRef = useRef();
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
    <>
      <Helmet>
        <title>Rolling | 롤링 페이퍼 작성하기</title>
      </Helmet>
      <S.Container>
        <form onSubmit={handleFormSubmit}>
          <S.Content>
            <div>
              <S.Label htmlFor="name">From.</S.Label>
              <S.Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <S.Label>프로필 이미지</S.Label>
              <p>프로필 이미지를 선택해주세요</p>
              <S.Profiles>
                {PROFILE_IMG.map((profile) => (
                  <S.Profile key={profile.id} isSelected={image === profile}>
                    <Avatar width="4.5rem" height="4.5rem" imgUrl={profile.img} onClick={() => handleProfile(profile)} />
                  </S.Profile>
                ))}
              </S.Profiles>
            </div>

            <div>
              <S.Label htmlFor="relationship">상대와의 관계</S.Label>
              <S.Select>
                <select id="relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                  <option value="지인">지인</option>
                  <option value="동료">동료</option>
                  <option value="가족">가족</option>
                  <option value="친구">친구</option>
                </select>
              </S.Select>
            </div>

            <S.TextEditor font={font}>
              <S.Label>내용을 입력해주세요</S.Label>
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
            </S.TextEditor>

            <div>
              <S.Label htmlFor="font">폰트 선택</S.Label>
              <S.Select>
                <select value={font} name="font" id="font" onChange={(e) => setFont(e.target.value)}>
                  <option value="Noto Sans">Noto Sans</option>
                  <option value="Pretendard">Pretendard</option>
                  <option value="나눔명조">나눔명조</option>
                  <option value="나눔손글씨 손편지체">나눔손글씨 손편지체</option>
                </select>
              </S.Select>
            </div>
          </S.Content>

          <Primary56Button type="submit" disabled={!isEmptyText()}>
            생성하기
          </Primary56Button>
        </form>
      </S.Container>
    </>
  );
}

export default MessageAddPage;
