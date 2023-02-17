import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    position: relative;
    border: 1px solid rgb(66, 203, 164);
    width: 500px;
    background-color: #14141B;
    padding: 4.5rem 2.5rem 2.5rem;
    border-radius: 1.5rem;
`;


export const ModalButton = styled.button`
    display: inline-block;
    background-color: #42CBA4;
    color: #14141B;
    padding: 1.25rem 2rem;
    font-size: 1.25rem;
    border-radius: 1rem;
    font-weight: 400;
    margin-top: 3.75rem;
    margin-bottom: 1.75rem;
    cursor: pointer;
    outline: none;
    :hover {
        background-color: #a7ffe6;
    }
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    background-color: transparent;
    color: #42CBA4;
    cursor: pointer;
    border:none;
    outline: none;
`;


export const ModalTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 700;
    margin: 0;
    padding: 5px 0;
    font-size: 1.75rem;
    color: #42CBA5;
`;


export const ModalSubtitle = styled.h2`
    width: 100%;
    text-align: center;
    font-weight: 400;
    
    padding: 5px 0;
    padding-bottom: 15px;
    font-size: 1rem;
    color: #42CBA5;
`;