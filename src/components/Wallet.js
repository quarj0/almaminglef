import React, { useEffect, useState } from 'react';

const Wallet = () => {
  const [walletInfo, setWalletInfo] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    // Fetch wallet information from the Django API
    fetchWalletInfo();
    // Fetch transaction history from the Django API
    fetchTransactionHistory();
  }, []);

  const fetchWalletInfo = () => {
    // Make an API request to fetch wallet information
    // Replace 'api/wallet' with the actual API endpoint for wallet info
    fetch('/api/wallet')
      .then((response) => response.json())
      .then((data) => setWalletInfo(data))
      .catch((error) => console.error('Error fetching wallet info:', error));
  };

  const fetchTransactionHistory = () => {
    // Make an API request to fetch transaction history
    // Replace 'api/transactions' with the actual API endpoint for transaction history
    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => setTransactionHistory(data))
      .catch((error) => console.error('Error fetching transaction history:', error));
  };

  return (
    <div className="wallet">
      <h2 className="wallet-title">Wallet</h2>
      {walletInfo ? (
        <div className="wallet-info">
          <h3 className="wallet-info-title">Wallet Information</h3>
          <p className="wallet-info-coins">Coins: {walletInfo.coins}</p>
          <p className="wallet-info-packages">Packages Available: {walletInfo.packages}</p>
          <p className="wallet-info-gateways">Transaction Gateways: {walletInfo.gateways.join(', ')}</p>
        </div>
      ) : (
        <p className="wallet-info-loading">Loading wallet information...</p>
      )}
      <div className="transaction-history">
        <h3 className="transaction-history-title">Transaction History</h3>
        {transactionHistory.length > 0 ? (
          <ul className="transaction-history-list">
            {transactionHistory.map((transaction) => (
              <li key={transaction.id} className="transaction-history-item">
                <p className="transaction-history-date">Date: {transaction.date}</p>
                <p className="transaction-history-type">Type: {transaction.type}</p>
                <p className="transaction-history-amount">Amount: {transaction.amount}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="transaction-history-empty">No transaction history available.</p>
        )}
      </div>
    </div>
  );
};

export default Wallet;
