import React from 'react'
import VideoRow from './VideoRow'
import ChannelRow from './ChannelRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css'

const SearchPage=()=> {
    return (
        <div className="SearchPage">
           <div className="searchPage__filter">
               <TuneOutlinedIcon/>
               <h2>FILTER</h2>
           </div>
           <hr />

           <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            verified
            subs="954K"
            noOfVideos={558}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...
"
           />
           <hr />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
           <VideoRow
               views="31K"
               subs="659K"
               description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
               timestamp="1 day ago"
               channel="Clever Programmer"
               title="STOP watching tutorials. code like this instead."
               image="https://i.ytimg.com/vi/d01vkk3CYi0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Zw0H6HeDYusxm0TIJjIM8QIVYA"
           />
        </div>
    )
}

export default SearchPage
