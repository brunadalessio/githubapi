import { useState } from 'react';
import Container from './components/container/index';
import MainContainerGrid from './components/container/indexList';
import Header from './components/header';
import UserContainer from './components/userContainer';
import UserPicture from './components/userPicture';
import UserDetails from './components/userDetails';
import { UserProps } from './components/types/User';
import Error from './components/services/Error';
import client from './components/services/client';
import clientList from './components/services/clientList';
import UserModal from './components/userModal';

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

  return (
    <div className="App">

        <Container>
            <Header loadUser={loadUser}/>
            {error && <Error />}
            {user ? 
            <UserContainer>
                <UserPicture url={user?.avatar_url} alt={user?.login}/>
                <UserDetails name={user?.name} login={user?.login} bio={user?.bio} />
                
                {/* Renderização do Modal, quando o botão é clicado */}
                <UserModal 
                  name={user?.name} 
                  login={user?.login} 
                  bio={user?.bio} 
                  email={user?.email}
                  location={user?.location} 
                  public_repos={user?.public_repos} 
                  followers={user?.followers}
                  following={user?.following}
                  url={user?.avatar_url}
                  alt={user?.login}
                >
                </UserModal>
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
