import React from "react"
import StatisticList from "./StatisticList"
import Card from "./card"
import SectionHeader from "../SectionHeader"
import CreatorCard from "./CreatorCard"
import data from "../../creator_data.json"

export default function WelcomePage() {
    return <main>
        <section id="welcome_section">
        <img src="./assets/welcome-1.png" alt="" />
        <img src="./assets/welcome-2.png" alt="" />
        <div className="gapped_container">
            <h1 style={{fontSize: "3rem"}}>Buy and Sell<br />Digital Arts</h1>
            <p>The world’s largest online marketplace of online digital art </p>
            <h3><a href="#">Explore</a></h3>
            <StatisticList />
        </div>
        </section>
        <section id="trending_section">
            <SectionHeader hero="Trending Sales" subHero="Checkout our weekly updated trending sales" />
            <div className="card_list">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
        <section id="creators_section">
            <SectionHeader hero="Top Creators" subHero="Checkout Top Rated Creators On The NFT Marketplace" button="View Rankings" />
            <div className="grid_container">
                {data.profiles.map(elem => {
                    return <CreatorCard key={elem.id} count={elem.id} creatorImg={elem.images} creatorName={elem.name} creatorSales={elem.sales} />
                })}
            </div>
        </section>
        <section id="statistics_section">
                <div className="info_div">
                    <h1>We Have The Best Digital Artists</h1>
                    <p>The world's Largest Digital Marketplace for digital art and 3d assets</p>
                    <StatisticList />
                    <button className="btn btn-transparent">Create</button>
                </div>
                <img src="./assets/stat-back.png" alt="stack photos" />
        </section>
        </main> 
}