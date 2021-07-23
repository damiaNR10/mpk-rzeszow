import React from 'react';

class Pagination extends React.Component {

    render() {
        return ( 
            <div className="pagination">
                <a className="pagination__btn" href="">Poprzednia strona</a>
                <ul className="pagination__ul">
                    <li><a href="">1</a></li>
                    <li>...</li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a className="active" href="">6</a></li>
                    <li><a href="">7</a></li>
                    <li><a href="">8</a></li>
                    <li>...</li>
                    <li><a href="">16</a></li>
                </ul>
                <a className="pagination__btn" href="">Następna strona</a>
            </div>
        );
    }
}

export default Pagination;