import React from 'react';
import NewsItems from './newsitems';

const NewsList = (props)=> {

  const items = props.news.map((item)=>{
         return (
          <NewsItems key={item.id} item={item} />
         )

     });

    return (
       <div> 
       {props.children}
       {items} 
       </div>
    )

}

export default NewsList;