import PropTypes from 'prop-types';
import TransactionHistoryModule from '../components/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {

  return (
    <>
      <table className={TransactionHistoryModule.transactionHistory}>
        <thead>
          <tr>
            <th className={TransactionHistoryModule.column}>Type</th>
            <th className={TransactionHistoryModule.column}>Amount</th>
            <th className={TransactionHistoryModule.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={TransactionHistoryModule.line} key={id}>
              <td className={TransactionHistoryModule.value}>{type}</td>
              <td className={TransactionHistoryModule.value}>{amount}</td>
              <td className={TransactionHistoryModule.value}>
                {currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
};
