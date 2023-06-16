import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('https://newsdata.io/api/1/news?apikey=pub_20189f6a8c03ba0b4695b2e79e7f2e43fc1ab&q=cryptocurrency').then((resp) => {
            setNews(resp.data.results);
            console.log(resp.data)
        }).catch((error) => {
            alert("Error in fetching data");
        })
    }, [])
    return (
        <>
            <div className='heading'>
                <h1>What's Trending Currently</h1>
            </div>
            {/* <HStack wrap={'wrap'} justifyContent={'space-evenly'} m={'10'} > */}
            <div className='news'>
                {Object.values(news).map((i) => (
                    <NewsCard title={i.title} author={i.creator} description={i.description} date={i.pubDate} img={i.image_url} source={i.source_id} />
                ))}
            </div>
            {/* </HStack> */}
        </>
    )
}

export default News