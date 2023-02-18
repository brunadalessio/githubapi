import { ContainerGrid, Title } from "./styles";

const MainContainerGrid = (props: any) => (
  <ContainerGrid>
    <Title>Não era esse usuário? Veja mais resultados: </Title>
    {props.children}
  </ContainerGrid>
);

export default MainContainerGrid;
