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
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
