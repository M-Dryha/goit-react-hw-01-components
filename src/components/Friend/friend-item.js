import PropTypes from 'prop-types';
import { Item, Name, Status, Image } from './Friend.styled';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <Status typeName={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendListItem;
