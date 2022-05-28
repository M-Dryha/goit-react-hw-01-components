import PropTypes from 'prop-types';
import { Table, String, Head, HeadCell, Cell } from './Transaction.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </tr>
      </Head>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <String key={id}>
              <Cell>{type}</Cell>
              <Cell>{amount}</Cell>
              <Cell>{currency}</Cell>
            </String>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
