import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
import App from '../App';
import StationCreate from '../pages/StationCreate'
import StationList from '../pages/stationList/StationList'
import StationDetail from '../pages/stationList/StationDetail'

class StationRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Router>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='stationCreate' element={<StationCreate />} />
                        <Route path='stationList' element={<StationList />} />
                        <Route path='stationDetail/:stationId' element={<StationDetail />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default StationRoute;