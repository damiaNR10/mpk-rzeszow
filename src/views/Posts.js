import React from 'react';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';


class Posts extends React.Component {

    render() {
        return ( 
            <>
                <header className="header">
                    <h2 className="content__header">Ogłoszenia MPK</h2>
                </header>
                <NewsList />
                <Pagination />
            </>
        );
    }
}

export default Posts;