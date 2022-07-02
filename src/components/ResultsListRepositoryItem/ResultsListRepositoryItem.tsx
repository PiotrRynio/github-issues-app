import { SearchedRepository } from 'hooks';
import { BookIcon, StarIcon, StatisticsLabel, StatisticsLabelContainer, Typography } from 'components';
import { ContentContainer, TitleContainer, Wrapper } from './ResultsListRepositoryItem.styles';
import { formattedLastUpdateDate } from 'utils';

export type ResultsListRepositoryItemProps = SearchedRepository;

export const ResultsListRepositoryItem = ({
  name,
  description,
  starsNumber,
  programmingLanguage,
  license,
  lastUpdateDate,
  openedIssuesNumber,
}: ResultsListRepositoryItemProps) => {
  return (
    <Wrapper>
      <TitleContainer>
        <BookIcon ariaLabel="book" typographyVariant="itemTitle" />
        <Typography variant="itemTitle">{name}</Typography>
      </TitleContainer>

      <ContentContainer>
        <Typography variant="body1">{description}</Typography>

        <StatisticsLabelContainer>
          <StatisticsLabel>
            <StarIcon ariaLabel="star" typographyVariant="small" />
            <Typography variant="small">{starsNumber} </Typography>
          </StatisticsLabel>

          {!!programmingLanguage && (
            <StatisticsLabel>
              <Typography variant="small">{programmingLanguage} </Typography>
            </StatisticsLabel>
          )}

          {!!license && (
            <StatisticsLabel>
              <Typography variant="small">{license} license</Typography>
            </StatisticsLabel>
          )}

          <StatisticsLabel>
            <Typography variant="small">Updated on {formattedLastUpdateDate(lastUpdateDate)} </Typography>
          </StatisticsLabel>

          {!!openedIssuesNumber && (
            <StatisticsLabel>
              <Typography variant="small">{openedIssuesNumber} issues need help</Typography>
            </StatisticsLabel>
          )}
        </StatisticsLabelContainer>
      </ContentContainer>
    </Wrapper>
  );
};
