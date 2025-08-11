import React, { useState } from 'https://esm.sh/react@18';

export default function HomePage() {
  const [payAmount, setPayAmount] = useState('');
  const [billAmount, setBillAmount] = useState('');

  const fieldStyle = {
    backgroundColor: '#1a1a1a',
    color: '#e0f7fa',
    border: '1px solid #00bcd4',
    borderRadius: '4px',
    padding: '0.5rem',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.25rem',
  };

  const fieldGroupStyle = {
    marginBottom: '1rem',
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
  };

  const formWrapperStyle = {
    flex: '1 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
  };

  return (
    React.createElement('main', { style: containerStyle },
      React.createElement('h1', { style: { textAlign: 'center', marginTop: '1rem' } }, 'Pricing Calculator'),
      React.createElement('section', { style: formWrapperStyle },
        React.createElement('form', { style: formStyle },
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'payAmount' }, 'Pay Amount'),
            React.createElement('input', {
              id: 'payAmount',
              type: 'number',
              value: payAmount,
              onChange: e => setPayAmount(e.target.value),
              style: fieldStyle,
            })
          ),
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'billAmount' }, 'Bill Amount'),
            React.createElement('input', {
              id: 'billAmount',
              type: 'number',
              value: billAmount,
              onChange: e => setBillAmount(e.target.value),
              style: fieldStyle,
            })
          ),
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'profitAmount' }, 'Profit Amount'),
            React.createElement('input', {
              id: 'profitAmount',
              type: 'text',
              readOnly: true,
              value: '0.00',
              style: fieldStyle,
            })
          ),
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'profitMargin' }, 'Profit Margin'),
            React.createElement('input', {
              id: 'profitMargin',
              type: 'text',
              readOnly: true,
              value: '0.00%',
              style: fieldStyle,
            })
          ),
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'highBillingRange' }, 'High Billing Range'),
            React.createElement('input', {
              id: 'highBillingRange',
              type: 'text',
              readOnly: true,
              value: '0.00',
              style: fieldStyle,
            })
          ),
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'lowBillingRange' }, 'Low Billing Range'),
            React.createElement('input', {
              id: 'lowBillingRange',
              type: 'text',
              readOnly: true,
              value: '0.00',
              style: fieldStyle,
            })
          ),
          React.createElement('div', { style: fieldGroupStyle },
            React.createElement('label', { style: labelStyle, htmlFor: 'markupUsed' }, 'Markup% Used'),
            React.createElement('input', {
              id: 'markupUsed',
              type: 'text',
              readOnly: true,
              value: 'High: 0.00%, Low: 0.00%',
              style: fieldStyle,
            })
          )
        )
      )
    )
  );
}
