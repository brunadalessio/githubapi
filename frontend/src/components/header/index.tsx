import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import GitPic from "../../assets/gitpic.png";
import {
  HeaderSection,
  HeaderPicture,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton,
} from "./styles";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Header = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <HeaderSection>
      <HeaderPicture src={GitPic} alt="Github Logo" />
      <HeaderInputContainer>
        <HeaderInput
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Buscar por usuário do GitHub..."
        />

        <HeaderSearchButton onClick={() => loadUser(userName)} type="submit">
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  );
};
export default Header;
