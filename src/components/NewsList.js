import React from 'react';
import News from './News';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const { uuid } = require('uuidv4');

class NewsList extends React.Component {

    state = {
        news: [
            {
                key: uuid(),
                header: "Lorem ipsum dolor sit amet.",
                date: "26.10.2021",
                content: "No elitr blandit. Sit takimata nulla. Et in nonumy. Esse elit sanctus luptatum dolor nam. Vero lobortis iriure magna augue diam sed sanctus. Elitr consectetuer at sit justo. Zzril vel in at sadipscing. No ipsum duis est invidunt dolores.",
                link: '',
            },
            {
                key: uuid(),
                header: "Lorem ipsum dolor sit amet.2",
                date: "16.10.2021",
                content: "Esse elit sanctus luptatum dolor nam. Vero lobortis iriure magna augue diam sed sanctus. Elitr consectetuer at sit justo. Zzril vel in at sadipscing. No ipsum duis est invidunt dolores.",
                link: '',
            },
            {
                key: uuid(),
                header: "Lorem ipsum dolor sit amet.2",
                date: "16.10.2021",
                content: "Esse elit sanctus luptatum dolor nam. Vero lobortis iriure magna augue diam sed sanctus. Elitr consectetuer at sit justo. Zzril vel in at sadipscing. No ipsum duis est invidunt dolores.",
                link: '',
            },
        ]
    }

    render() {
        return ( <>
            <div className="news-list">
                {this.state.news.map((news) =><News key={news.key} header={news.header} date={news.date} content={news.content} link={news.link} />)}
            </div>  
            </>      
        );
    }
}

export default NewsList;