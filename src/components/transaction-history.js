import TransactionItem from 'components/transaction-item';

const TransactionHistory = ({ items }) => {
    return (<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(({ id, type, amount, currency })=>{ 
                return (
                    <TransactionItem
                        id={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                )
            })
            }
            
  </tbody>
</table>)
}

export default TransactionHistory;