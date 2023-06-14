import React from "react";

export default function Card() {
    return (
        <div className="card">
            <div>
                <div className="grid-container">
                    <h3>Da Viper</h3>
                    <img src="./assets/card-icon.png" alt="Card" />
                    <p className="card-text grey-text">Creator</p>
                    <p className="card-name">Tom Edison</p>
                    <p className="card-text grey-text text-align-right">Amount</p>
                    <p className="card-price text-align-right">45.50 USD</p>
                </div>
            </div>
        </div>
    )
}