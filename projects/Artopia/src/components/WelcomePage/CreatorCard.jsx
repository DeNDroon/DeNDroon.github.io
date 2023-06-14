import React from "react";

export default function CreatorCard({count,creatorImg, creatorName,creatorSales}) {
    return (
        <div className="card_animating">
            <div className="creator_card">
                <p className="card_number">{count}</p>
                <img src={creatorImg} alt="avatar" />
                <h3>{creatorName}</h3>
                <p><span className="grey-text">Total Sales </span>{creatorSales}</p>
         </div>
        </div>
    )
}