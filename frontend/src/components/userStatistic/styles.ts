import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatisticContainer = styled.div`
  width: 140px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgb(66, 203, 164);
  border-radius: 0.75rem;
  border-radius: 10px;
  h1 {
    font-size: 20px;
    text-align: center;
    color: #42cba4;
    margin: 0;
  }
  h2 {
    font-size: 16px;
    text-align: center;
    color: #d9d9d9;
    margin: 0;
  }
`;
