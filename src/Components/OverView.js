import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import data from "../iplData";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import "./Table.css";
import dataimage from "./Dataanalysis.jpg";
import imgs from "./images.jpg"
import dataimgtwo from "./imagesipl.jpg"


export default function OverView() {
  const [ipl, setIpl]=useState([]);
  const [totalMatch, setTotalMatch]=useState(0);

  const totalmatch1=()=>{
     const newData= data.length;
     console.log(newData);
     setTotalMatch(newData)
  }
  const run = () => {
   const newData =data.filter((item)=>item.city == "cuttack")
   console.log(newData)
   setIpl(newData);
  }

  return (
    <>
    <div>
     <Header />
     {/* <h3>Over View</h3> */}
     <div className="img">
      <img src={dataimage} alt="" />
      <img src={dataimgtwo} alt="" />
     </div>
  
    <div className="boxItem">
      <div className="box1">
     <Box
      sx={{
        width: 150,
        height:100,
        borderRadius:5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:1,
        textAlign:"center",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Total Match - 636</Box> </div>
      <div className="box1">
      <Box
      sx={{
        width: 150,
        height:100,
        borderRadius:5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:1,
        textAlign:"center",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Total Team - 8</Box> </div>

      <div className="box1">
      <Box
      sx={{
        width: 150,
        height:100,
        borderRadius:5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:1,
        textAlign:"center",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}> Super Over (Tie) - 7</Box> </div>
      <div className="box1">
      <Box
      sx={{
        width: 150,
        height:100,
        borderRadius:5,
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:1,
        textAlign:"center",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}> <h4>Top Most Winner</h4>
      <p>Mumbai Indian (92)</p>
       </Box> </div>
      <div className="box1">
      <Box
      sx={{
        width: 150,
        height:100,
        borderRadius:5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:1,
        textAlign:"center",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Total City - 8</Box> </div>

</div>
     <div className="graph">
      <button className="dashboard"><Link to="/graph" style={{textDecoration:"none"}}> Graph Analysis</Link></button>
      <button className="dashboard"><Link to="/table" style={{textDecoration:"none"}}> Table Analysis</Link></button>
    </div>
    <div className="para">
    <p>
    Based on further other analysis, I was able to get some interesting inferences out. Please note that, the better you understand the dataset, easier it will be for you to get your questions answered.

Team batting second has more chances of winning a match. Team batting second won 53 out of 100 matches played whereas a team batting first won 47 out of 100 matches. (Note — Let’s rule out the possibility of a tie and no-result )
Chances of a match getting tied is just 1% . This means only 1 match gets tied out of 100 matches
Chances of a match getting no result is just 0.5%. This means only 1 out of 200 matches played will have no result
There is 20% chance of a close encounter match where a team batting first just win by a margin of less than 10 runs. That does means that out of 100 matches where a team wins by batting first, 20 of them will be a thriller. A thriller to me means a team winning by a margin of less than 10 runs.
    </p>
  
    When you’re a die-hard cricket fan who watches almost every game, choosing the right players in fantasy IPL may seem as easy as knowing exactly what dish to order in a restaurant that has a massive menu. However, this wasn’t true in my case. In fact, this blog isn’t about me giving gyaan on the subject, but rather a reflection of my trials and errors over the last few years in putting together a team that could make a mark on the leaderboard – even if the slightest.
<br />
Of late though, I have been making conscious efforts to better my game, and seem to be doing fairly well now. This, however, was no easy task. My path became clearer and my efforts more fruitful when I was able to take data analytics along with me into this fantasy world.
<br />
<br />
So, from one enthusiast to the other, here are my two cents on what can help you create the right team based on numbers, the power of observation, and a little bit of luck.
</div>
<br />
<br />
 <div className="img">
  <img src={imgs} alt="" />
 </div>

<div className="para">
  <p>
  
Consistency is Key
<br />
<br />
The first and foremost point to keep in mind is finding consistent performers, and there are some tools that can help you determine who is on top of their game that season. Here are some of my obvious picks:
<br />
<br />
Suryakumar Yadav: My top pick will always be Yadav of the Mumbai Indians. In 2020, he collected a total of 400 runs in just 16 matches. He was consistent in 2018 and 2019 as well by amassing 400+ runs. Yadav made a name for himself from the very beginning of his cricket career, which can be further proved by his consistent performance for Team India as well.
<br />
<br />
Bhuvaneshwar Kumar: Kumar is a sure-shot player, and, as Michael Vaughn pointed out, he is also possibly the “smartest player” his generation has to offer. Even in ODI and T20 matches in the pre-IPL era, he was always able to out-smart his opponents. From the 151 matches he has played in the IPL, he has maintained an average of 24, and one can always expect wickets from him. Economically too, Kumar is a man to watch out for, as he is in the top five.
<br />
<br />
David Warner: No matter how the Sunrisers Hyderabad perform, Warner remains consistent, and has managed to remain the highest run-scorer for his team.
<br />
<br />
KL Rahul: Rahul, with an average of 44, is a consistent player who is also great at stitching together partnerships.
<br />
<br />
Playing by Numbers
<br />
<br />
After some years of bungling up, I realized that variables such as economy, average, past performance, etc. can be best understood using data analysis. I have found the platforms Kaggle and Howstat to be useful resources.
<br />
<br />
Kaggle, which serves as a home for a lot of challenging data science competitions, has an IPL dataset that has ball-by-ball details of all the IPL matches till 2020. That’s 12 years of granular data you can aggregate to get the metrics of your choice. 
<br />
<br />
Howstat, on the other hand, has the most frequently used metrics laid out beautifully. Thanks to the folks with whom I play cricket, I came to know about this wonderful website.
<br />
<br />
Let’s talk about venues specifically, which, as you may know by now, play a critical role in the fantasy world too, and can directly impact the kind of players you pick. In the early days (pre-2010), when Dada would walk onto the pitch at Eden Gardens, the crowd would roar because it was given that he would put up a good show on his home turf. But why take the risk and rely on gut and cheers where numbers can lead you to assured results? Especially when the stakes are so high and the competition so fierce.
<br />
<br /><br />
Here is where I would look to data analysis to help me make a more informed decision. For example, if one were to refer to KL Rahul’s scores on Howstat, you can see that despite having played the most matches at Chinnaswamy Stadium (15 in total), Rahul’s average at theIS Bindra Stadium is much better. His average is 49.78 at IS Bindra, while at Chinnaswamy Stadium, his average is 38.22.
<br />
<br />
(Pro-tip: One player who comes to mind not just for his batting skills but also for his ability to perform well across pitches is Shikhar Dhawan. I would definitely include him in my team. He also secures tons of catches which adds to the points tally).
<br />
<br />
Now some of you may not have the time to sort through the many IPL datasets available on a platform such as Kaggle, which is understandable as even the best of us can be intimidated by numbers. One tip I have for you folk is to merely look at what the numbers point to on your app of choice. By looking at the percentage of people choosing a particular player on the Dream11 app, for example, you can understand which players are on top of their game that season.
<br />
<br />
This is best determined somewhere around the middle of the season, after around five-six matches, as that is when you will know who is at his peak and whom you can skip from your team.
<br />
<br />
The Non-Data Way
<br /> <br />
If you are struggling to make your way through all the numbers, I have some non-statistical tips too, which I learned to include in my game only after my many trials and tribulations.
<br /> <br />
1. It’s human nature to compare ourselves to others – you know how it goes, the grass is always greener and all that jazz. This leads to mimicry, and while at times it helps to follow in the footsteps of those you aspire to be (on the leaderboard in this case), unfortunately, in 20-20 fantasy, this doesn’t work. The best route is to work out your own strategy and make your own mistakes.
<br /> <br />
2. Make sure to use boosts and player-transfer options wisely in the initial stages. It’s only normal to want a good leaderboard score while starting out, but this could lead you to exhaust your transfer list very early on, leaving you with the same players through the season. This can also significantly bring down your score. Using sufficient transfers and boosts towards the business end of things (post 20 matches or so) can go a long way.
<br /> <br />
3. Using the uncapped player-transfer option is also worth exploring. This can reveal a whole range of players and talent from different countries, who haven’t played for Team India, but who are extremely skilled.
<br /> <br />
4. Coming to all-rounders – my tip would be to have three in your team. This is especially important while selecting your captain and vice-captain. For example, Chris Woakes is one all-rounder who has worked well for me this season before he left.

Use your gut, use your mind

What I can say for certain through this blog, is that nothing is certain in fantasy cricket. Yet, while this may seem like the most unsatisfactory take-away, I can vouch for one thing – data analysis can definitely change your game for the better.

Of course, certain factors are out of our control. Injuries, fouls, poor weather, etc. are an inevitable part of any sport and could significantly change the outcome of a game. But if one dataset or one number-crunch can change how you view a match and give you better insight, wouldn’t that be something worth exploring? In Dhoni’s own words, ‘bas dimaag laga ke khel’!
</p>
</div>
    <Footer />
    </div>
    </>
  )
}
