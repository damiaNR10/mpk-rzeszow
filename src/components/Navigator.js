import React from 'react';

class Navigator extends React.Component {

    render() {

        const {name, link, imgSrc, imgWidth} = this.props;

        return ( 
            <>
                <a href={link} className="navigator"><img style={{width: `${imgWidth}`}} src={`${imgSrc}`} alt={`${name}`} />{name}</a>
            </>
        );
    }
}

export default Navigator;