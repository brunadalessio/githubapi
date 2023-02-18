import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

export const Name = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 700;
  margin: 0;
  font-size: 1.75rem;
  color: #42cba5;
`;

export const Username = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #42cba5;
  margin: 0;
  padding: 5px;
`;

export const Description = styled.p`
  width: 300px;
  height: 30px;
  margin: 5px 0;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.3;
  color: #42cba5;
  @media (max-width: 430px) {
    width: 250px;
  }
`;
