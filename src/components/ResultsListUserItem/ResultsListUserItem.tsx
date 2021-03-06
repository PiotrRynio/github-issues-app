import { SearchedUser } from 'hooks';
import { Typography, Avatar, Link } from 'components';
import { ContentContainer, DescriptionContainer, TitleContainer, Wrapper } from './ResultsListUserItem.styles';

export type ResultsListUserItemProps = SearchedUser;

export const ResultsListUserItem = ({ login, name, description, location, avatar }: ResultsListUserItemProps) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Avatar name={name || login} image={avatar} />
        <Link to={`/users/${login}`}>
          <Typography variant="itemTitle">{name || login}</Typography>
        </Link>
      </TitleContainer>
      <ContentContainer>
        <Typography variant="body1">{login}</Typography>
        <DescriptionContainer>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="small">{location}</Typography>
        </DescriptionContainer>
      </ContentContainer>
    </Wrapper>
  );
};
