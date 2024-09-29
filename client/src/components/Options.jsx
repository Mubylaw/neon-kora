const Options = ({ amount, setAmount }) => {
  return (
    <div className="center">
      <div className="h3">Choose a Payment type</div>
      <div className="amount">
        <input
          type="number"
          name="amount"
          placeholder="Amount to Pay"
          id=""
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="options">
        <div className="pa">
          <img src="/assets/pos.png" alt="" />
          <div className="title">POS Payment</div>
          <p>Merchant - Customer</p>
          <a href="/pos">
            <div className="btn">Start Demo</div>
          </a>
        </div>
        <div className="pa">
          <img src="/assets/online.png" alt="" />
          <div className="title">Online Payment</div>
          <p>Customer</p>
          <a href="/onlinepayment">
            <div className="btn">Start Demo</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
