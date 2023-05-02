import PropTypes from 'prop-types';
import StatisticsModule from '../components/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {

  return (
    <>
      <section className={StatisticsModule.statistics}>
        {title && <h2 className={StatisticsModule.title}>{title}</h2>}

        <ul className={StatisticsModule.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
              className={StatisticsModule.item}
            >
              <span className={StatisticsModule.label}>{label}</span>
              <span className={StatisticsModule.percentage}>
                {percentage}%
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};