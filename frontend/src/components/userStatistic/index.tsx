import { Container, StatisticContainer } from "./styles";

const UserStatistic = (props: any) => {
  return (
    <Container>
      <StatisticContainer>
        <h1>{props?.repos}</h1>
        <h2>Repositórios</h2>
      </StatisticContainer>

      <StatisticContainer>
        <h1>{props?.followers}</h1>
        <h2>Seguidores</h2>
      </StatisticContainer>

      <StatisticContainer>
        <h1>{props?.following}</h1>
        <h2>Seguindo</h2>
      </StatisticContainer>
    </Container>
  );
};

export default UserStatistic;
