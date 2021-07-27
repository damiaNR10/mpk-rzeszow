import React from 'react';

class File extends React.Component {

    render() {

        const {author, date, link, name, size, type} = this.props;

        return ( 
            <article className="file">
                <a href={link} className="file__a"></a>
                <h2 className="file__header">{name}</h2>
                <span className="file__span">{date} | {author}</span>
                <span className="file__download"><b>Pobierz plik</b>({type}, {size})</span>
            </article>
        );
    }
}

export default File;