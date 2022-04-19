import React, {Component} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import stationApi from '../../utils/api/stationApi.js'

class StationList extends Component {
    state = {
        rows: []
    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const data = await stationApi.getAllStation();
        this.setState({rows: data.map(r => <tr>
            <td>{r.name}</td>
            <td>{r.updateTime}</td>
            <td><Link to={`/stationDetail/${r.id}`}>test</Link></td>
        </tr>)});
    }

    render() {
        return (
            <div>
                <button>返回</button>
                <table>
                    <thead>
                        <th>站點</th>
                        <th>修改時間</th>
                        <th>動作</th>
                    </thead>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default function(props) {
    const navigation = useNavigate();
    return <StationList {...props} navigation={navigation} />;
}