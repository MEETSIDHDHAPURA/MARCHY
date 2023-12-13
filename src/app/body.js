"use client"
import React from 'react'
import CountUp from 'react-countup';

const Body = () => {
    return (
        <>
        <body>
            <div>
                <div class="colom">
                    <div>
                        <h1 class="business">Let's Take your <span class="span">Business<br/></span> to the Next Level</h1>
                    </div>
                    <div class="lorem">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...</h4>
                    </div>  
                    <div>
                        <button type='button' class="gstart">Get Start</button>
                        <button type='button' class="lmore">Learn More</button>
                    </div>
                </div>
                <div class="colom">
                    <img src="./Image/roket.png" alt="Image" height={500} width={500} ></img>
                </div>
            </div>
            <footer class="foot">
                <div class="number">
                    <div class="num"><CountUp start={0} end={5489}></CountUp>+</div>
                    <div class="num"><CountUp start={0} end={2437}></CountUp>+</div>
                    <div class="num"><CountUp start={0} end={4673}></CountUp>+</div>
                    <div class="num"><CountUp start={0} end={1437}></CountUp>+</div>
                </div>
                <div class="info">
                    <p>Links Optimized</p>
                    <p>Happy Customers</p>
                    <p>Websites Improved</p>
                    <p>Active Accounts</p>
                </div>
            </footer>
            </body>
        </>
    )
}
export default Body