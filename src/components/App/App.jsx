
import Profile from 'components/Profile/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friend-list';
import TransactionHistory from 'components/transaction-history';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
    
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
          <FriendList friends={friends} />
          <TransactionHistory items={transactions} />
      </Container>
    
  )
}





