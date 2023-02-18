import { Container, ProfilePicture } from "./styles";

const UserPicture = (props: any) => (
  <Container>
    <ProfilePicture src={props?.url} alt={props?.login} />
  </Container>
);

export default UserPicture;
