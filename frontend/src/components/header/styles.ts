import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 400px;
  height: 190px;
  background: rgba(20, 20, 27, 0.2);
  border: 1px solid rgb(66, 203, 164);
  border-radius: 0.75rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: 430px) {
    width: 300px;
  }
`;

export const HeaderPicture = styled.img`
  margin: 15px 0;
  width: 80px;
  height: 80px;
  animation: profile__animate 8s ease-in-out infinite 1s;

  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
`;

export const HeaderInputContainer = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderInput = styled.input`
  width: 175px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 0 16px;
  color: #444;
  transition: 0.4s ease;

  &:focus {
    outline: none;
    width: 220px;
    transition: 0.4s ease;
  }
`;

export const HeaderSearchButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border: none;
  background: #42cba4;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: ease 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
    cursor: pointer;
  }
`;
