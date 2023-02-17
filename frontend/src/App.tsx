import Container from './components/container';
import MainContainerGrid from './components/container/indexList';
import Header from './components/header';
import UserContainer from './components/userContainer';
import UserPicture from './components/userPicture';
import UserDetails from './components/userDetails';
import UserStatistic from './components/userStatistic';
import { useState } from 'react';
import { UserProps } from './components/types/User';
import client from './components/services/client';
import clientList from './components/services/clientList';
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import Error from './components/services/Error';

import { 
    ModalContainer,
    ModalOverlay,
    ModalButton,
    ModalContent,
    ModalCloseButton,
    ModalTitle,
    ModalSubtitle
    
} from './components/userModal/styles';

function App() {
  // Pegar os dados do usuário digitado na pesquisa
  const [user, setUser] = useState<UserProps | null>(null);
  // Listar usuários de acordo com a pesquisa
  const [userList, setUserList] = useState<any[]>([]);
  // Verificar se o usuário não existe
  const [error, setError] = useState(false);

  // Requisições na API do github
  const loadUser = async (userName: string) => {
    //Caso não existir usuário na próxima requisição da API, zerar a pesquisa e o erro
    setError(false);
    setUser(null);
    
    //Requisições e verificação de erro
    try {
        const res = await client.get(`/${userName}`);
        const resList = await clientList.get(`users?q=${userName}`);
        setUser(res.data);
        setUserList(resList.data.items);
    } catch(err) {
        setError(true);
        return;
    }
  } 

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
    <div className="App">

        <Container>
            <Header loadUser={loadUser}/>
            {error && <Error />}
            {user ? 
            <UserContainer>

                <UserPicture url={user?.avatar_url} alt={user?.login}/>
                <UserDetails name={user?.name} login={user?.login} bio={user?.bio} />

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
                        <a href={user?.html_url}>
                          <UserPicture url={user?.avatar_url} alt={user?.login}/>
                        </a>
                        <ModalTitle>{user?.name}</ModalTitle>
                        <ModalSubtitle>
                          @{user?.login}
                          <br />
                          {user?.location}
                          <br />
                          {user?.email}
                          <br />
                          <hr />
                          <br />
                          {user?.bio}
                          </ModalSubtitle>
                          <UserStatistic repos={user?.public_repos} followers={user?.followers} following={user?.following} />
                          <ModalCloseButton onClick={closeModal}><AiOutlineClose /></ModalCloseButton>
                      </ModalContent>
                    </ModalOverlay>
                  </Modal>
                </ModalContainer>
            </UserContainer>
            : undefined }

        </Container>
        {user ?  
        <MainContainerGrid>
        {userList.map((item, index) => 
              <UserContainer key={index}>
                <a href={item.html_url}>
                  <UserPicture url={item.avatar_url} alt={item.login}/>
                  <UserDetails login={item.login} url={item.html_url} />
                </a>
              </UserContainer>
              )}
        </MainContainerGrid>
        : undefined}
    </div>
  );
}

export default App;
