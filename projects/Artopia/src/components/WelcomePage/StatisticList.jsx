import React from "react";
import Statistic from "./statistic"

export default function StatisticList() {
        return (<div className="statistic_list">
                <Statistic num={"999,000"} category={"Digital art file"} />
                <Statistic num={"2,000"} category={"Art Seller"} />
                <Statistic num={"1,0000"} category={"Buyer"} />
            </div>)
}