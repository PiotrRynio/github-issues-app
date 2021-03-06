import { SearchedRepository } from 'hooks';
import { BookIcon, StarIcon, StatisticsLabel, StatisticsLabelContainer, Typography } from 'components';
import { ContentContainer, LanguageColorCircle, TitleContainer, Wrapper } from './ResultsListRepositoryItem.styles';
import { formattedLastUpdateDate } from 'utils';
import { PROGRAMMING_LANGUAGE_COLORS } from 'constants/programmingLanguageColor';

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
        <BookIcon ariaLabel="book" />
        <Typography variant="itemTitle">{name}</Typography>
      </TitleContainer>

      <ContentContainer>
        <Typography variant="body1">{description}</Typography>

        <StatisticsLabelContainer>
          <StatisticsLabel>
            <StarIcon ariaLabel="star" />
            <Typography variant="small">{starsNumber} </Typography>
          </StatisticsLabel>

          {!!programmingLanguage && (
            <StatisticsLabel>
              <LanguageColorCircle languageColor={PROGRAMMING_LANGUAGE_COLORS[programmingLanguage]} />
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
