import styled from 'styled-components';

export const Container = styled.main`
    height: 100%;
    padding: 10px;
    margin-top: 30px;
    background-color: #14141B;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContainerGrid = styled.main`
    height: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #14141B;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    gap: 15px;
`;

export const Title = styled.h1`
    width: 100%;
    margin-top: 5px;
    text-align: center;
    font-weight: 700;
    font-size: 1.75rem;
    color: #42CBA5;
`;