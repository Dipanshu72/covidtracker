import React from 'react';

// import Cards from 'src/components/Cards/Cards';
// import Chart from 'src/components/Chart/Charts';
// import CountryPicker from 'src/components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from  './image/image.png';


class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        

        this.setState({ data: fetchedData });
       
    }
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});

        

    }


    render() {
        const { data,country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Covid-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }

}

export default App;