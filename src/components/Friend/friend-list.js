import PropTypes from 'prop-types';
import FriendListItem from 'components/Friend/friend-item';
import { FriendList } from './Friend.styled';

const Friend = friends => {
  // console.log(friends);
  return (
    <FriendList>
      {friends.friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <FriendListItem
            avatar={avatar}
            key={id}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </FriendList>
  );
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default Friend;
