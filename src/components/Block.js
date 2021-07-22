import React from 'react';

class Block extends React.Component {

    render() {

        const {header, content} = this.props;

        return ( 
            <article className="block">
                <h3 className="block__header">{header}</h3>
                <ul className="block__ul">
                    {content.map(element => <li key={element.key}><img style={{width: element.imgWidth}} src={`${element.imgSrc}`} alt="" /><a href={`${element.link}`} className="block__a"></a></li>)}
                </ul>
            </article>
        );
    }
}

export default Block;