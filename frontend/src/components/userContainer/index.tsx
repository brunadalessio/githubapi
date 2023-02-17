import { Section } from './styles';

const UserContainer = (props:any) => (
    <Section>
        {props.children}
    </Section>
);

export default UserContainer;