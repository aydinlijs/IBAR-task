import React from 'react';
import './style/style.css';
import Header from './Header';
import Cities from './Cities';
import Table from './Table';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Cities />
                <Table />
            </>
        )
    }
}

export default App;