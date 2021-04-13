import React from 'react';

// import Cards from 'src/components/Cards/Cards';
// import Chart from 'src/components/Chart/Charts';
// import CountryPicker from 'src/components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
    }

    async componenetDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);

        this.setState({ data: fetchedData });
       
    }
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }

}

export default App;