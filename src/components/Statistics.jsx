import StatisticsModule from '../components/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = data => {
  const { title, stats } = data;

  return (
    <>
      <section className={StatisticsModule.statistics}>
        {title && <h2 className={StatisticsModule.title}>{title}</h2>}

        <ul className={StatisticsModule.statList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
              className={StatisticsModule.item}
            >
              <span className={StatisticsModule.label}>{stat.label}</span>
              <span className={StatisticsModule.percentage}>
                {stat.percentage}%
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
