import { Item, Name, Status, Image } from './Friend.styled';

const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <Item key={id}>
      <Status typeName={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
