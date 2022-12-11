import React from 'react';
import DataStorage from './WatchlistData/DataStorage';
import WatchlistTable from './WatchlistData/WatchlistTable';

const Watchlist = () => {
    return (
        <>
           <DataStorage/>
           <WatchlistTable/>
        </>
    );
};

export default Watchlist;