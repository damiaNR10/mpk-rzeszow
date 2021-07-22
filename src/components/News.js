import React from 'react';
const { uuid } = require('uuidv4');

class News extends React.Component {

    render() {

        const {header, date, link, content} = this.props;

        return ( 
            <article className="news">
                <h3 className="news__header">{header}</h3>
                <span className="news__date">{date}</span>
                <p className="news__p">{content}</p>
                <a title={header} className="news__a" href={link}>Więcej</a>
            </article>
        );
    }
}

export default News;