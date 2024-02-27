import styled from "@emotion/styled";

export const ListButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  width: 72.5rem;
  justify-content: center;
  margin-top: 1.8rem;
  padding: 1.5rem 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
