import { useSearchParams } from 'react-router-dom';
import { useSearchedUsers, useSearchedRepositories } from 'hooks';
import { ResultsList, Typography } from 'components';
import { Wrapper, InitialInformationContainer } from './Results.styles';

export const Results = () => {
  const [searchParams] = useSearchParams();
  const searchedText = searchParams.get('query') || '';

  const { data: searchedUsersData, isLoading: isSearchedUsersDataLoading } = useSearchedUsers(searchedText);
  const { data: searchedRepositoriesData, isLoading: isSearchedRepositoriesLoading } =
    useSearchedRepositories(searchedText);

  const isLoading = isSearchedUsersDataLoading || isSearchedRepositoriesLoading;
  const totalSearchedUsersNumber = searchedUsersData?.totalSearchedUsersNumber || 0;
  const totalSearchedRepositoriesNumber = searchedRepositoriesData?.totalSearchedRepositoriesNumber || 0;

  const totalSearchedResultsNumber = totalSearchedUsersNumber + totalSearchedRepositoriesNumber;

  return (
    <Wrapper>
      <Typography variant="title">{isLoading ? 'Loading' : totalSearchedResultsNumber} results</Typography>

      {!!searchedText ? (
        <ResultsList
          isUsersLoading={isSearchedUsersDataLoading}
          isRepositoriesLoading={isSearchedRepositoriesLoading}
          searchedUsers={searchedUsersData?.searchedUsers}
          searchedRepositories={searchedRepositoriesData?.searchedRepositories}
          totalSearchedItemsNumber={totalSearchedResultsNumber}
        />
      ) : (
        <Wrapper>
          {!searchedText && (
            <InitialInformationContainer>
              <Typography variant="subtitle">Hi Programmer!</Typography>
              <Typography variant="body1">You will find a searcher at the top of the page!</Typography>
              <Typography variant="body1">Use it and find repositories or users.</Typography>
            </InitialInformationContainer>
          )}
        </Wrapper>
      )}
    </Wrapper>
  );
};
