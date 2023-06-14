import React from "react";

export default function SectionHeader({hero,subHero,button}) {
    return (
        <div className="section_header">
            <h1 className="hero">{hero}</h1>
            <p className="sub_hero">{subHero}</p>
            {button && <button className="btn btn-purple">{button}</button>}
        </div>
    )
}