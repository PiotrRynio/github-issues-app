import { FetchingStatus, ResultsListRepositoryItem, ResultsListUserItem } from 'components';
import { Wrapper } from './ResultsList.styles';
import { SearchedRepository, SearchedUser } from 'hooks';

export type SearchedResultsListProps = {
  isUsersLoading: boolean;
  isRepositoriesLoading: boolean;
  searchedUsers?: SearchedUser[];
  searchedRepositories?: SearchedRepository[];
  totalSearchedItemsNumber: number;
};

export const ResultsList = ({
  isRepositoriesLoading,
  isUsersLoading,
  searchedUsers,
  searchedRepositories,
  totalSearchedItemsNumber,
}: SearchedResultsListProps) => {
  if (isUsersLoading || isRepositoriesLoading) {
    return <FetchingStatus status="loading" />;
  }
  if (!searchedUsers || !searchedRepositories) {
    return <FetchingStatus status="error" />;
  }

  if (!totalSearchedItemsNumber) {
    return <FetchingStatus status="noResults" />;
  }

  const sortedItemsById = [...searchedUsers, ...searchedRepositories].sort((a, b) => a.id - b.id);

  return (
    <Wrapper>
      {sortedItemsById.map((item) => {
        if (item.type === 'user') {
          return <ResultsListUserItem key={item.id} {...item} />;
        }
        if (item.type === 'repository') {
          return <ResultsListRepositoryItem key={item.id} {...item} />;
        }
        return null;
      })}
    </Wrapper>
  );
};
