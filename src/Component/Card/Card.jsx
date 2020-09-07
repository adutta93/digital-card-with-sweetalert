import React, { useState } from "react";
import "./Card.css";
import Swal from "sweetalert2";

const Card = () => {
  const [cardvalue, setCardvalue] = useState({
    name: "",
    cardNumber: "xxxx xxxx xxxx xxxx",
    cvv: "",
    expDate: ""
  });

  const alert = () => {
    Swal.fire({
      title: "Successfull",
      text: "Your payment is successfull",
      icon: "success",
      showCancelButton: true
    });
    setCardvalue({
      name: "",
      cardNumber: "",
      cvv: "",
      expDate: ""
    });
  };
  return (
    <div className="maim-body">
      <div className="main-card">
        <div className="header">
          <img
            src="https://www.bethpagefcu.com/-/media/Images/bethpage/Page-Content/CC_chip.ashx?la=en&hash=5C7489F85871C2B5ADB440786183A0CC"
            alt=""
          />
          <h1>VISA</h1>
        </div>
        <h3 className="card-number">
          <div className="placeholder">{cardvalue.cardNumber}</div>
        </h3>

        <div className="main-card-bottom">
          <div className="card-holder">
            <label>Card Holder </label>
            <br />
            <span>{cardvalue.name}</span>
          </div>

          <div className="date">
            <label>Exp date </label>
            <br />
            <span>{cardvalue.expDate}</span>
          </div>

          <div className="cvv-num">
            <label>CVV </label>
            <br />
            <span>{cardvalue.cvv}</span>
          </div>
        </div>
      </div>

      <div className="card-input">
        <div className="card-input-content">
          <div className="CardNumber">
            <input
              type="text"
              placeholder="CARD NUMBER"
              value={cardvalue.cardNumber}
              onChange={(e) =>
                setCardvalue({ ...cardvalue, cardNumber: e.target.value })
              }
            />{" "}
          </div>

          <div className="name">
            <input
              type="text"
              placeholder="NAME"
              value={cardvalue.name}
              onChange={(e) =>
                setCardvalue({ ...cardvalue, name: e.target.value })
              }
            />
          </div>

          <div className="footer">
            <div className="exp-date">
              <input
                type="date"
                value={cardvalue.expDate}
                onChange={(e) =>
                  setCardvalue({ ...cardvalue, expDate: e.target.value })
                }
              />
            </div>
            <div className="cvv">
              <input
                type="text"
                placeholder="CVV"
                value={cardvalue.cvv}
                onChange={(e) =>
                  setCardvalue({ ...cardvalue, cvv: e.target.value })
                }
              />
            </div>
          </div>
          <button onClick={alert} className="btn">
            {" "}
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
