import PropTypes from 'prop-types';
import { getRandomHexColor } from './RandomColor';
import {
  Section,
  StatisticsList,
  StatisticsItem,
  Title,
  Label,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{label}</Label>
              <Label>{percentage}%</Label>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
