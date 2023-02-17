import { Container } from './styles';

const MainContainer = (props:any) => (
    <Container>
        {props.children}
    </Container>
);

export default MainContainer;