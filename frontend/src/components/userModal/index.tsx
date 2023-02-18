import Modal from "react-modal";
import { useState } from 'react';
import UserStatistic from '../userStatistic';
import { AiOutlineClose } from "react-icons/ai";
import { Container } from '../userPicture/styles';
import { ProfilePicture } from '../userPicture/styles';
import { 
  ModalContainer,
  ModalOverlay,
  ModalButton,
  ModalContent,
  ModalCloseButton,
  ModalTitle,
  ModalSubtitle 
} from './styles';

const UserModal = (props:any) => {

    // Setup do modal para visualizar detalhes do usuário
    Modal.setAppElement("#root");
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
      <ModalContainer>
      <ModalButton onClick={openModal}>Mais detalhes</ModalButton>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Usuário Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        >
          <ModalOverlay>
            <ModalContent>
              <a href={props?.html_url}>
                <Container>
                  <ProfilePicture src={props?.url} alt={props?.login} />
                </Container>
              </a>
              <ModalTitle>{props?.name}</ModalTitle>
              <ModalSubtitle>
                @{props?.login}
                <br />
                {props?.location}
                <br />
                {props?.email}
                <br />
                <hr />
                <br />
                {props?.bio}
              </ModalSubtitle>
            <UserStatistic repos={props?.public_repos} followers={props?.followers} following={props?.following} />
            <ModalCloseButton onClick={closeModal}><AiOutlineClose /></ModalCloseButton>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </ModalContainer>
    );
}

export default UserModal;
