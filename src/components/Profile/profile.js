import PropTypes from 'prop-types';
import {
  ProfileBox,
  Description,
  Image,
  Name,
  Info,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileBox>
      <Description>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Info>{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
