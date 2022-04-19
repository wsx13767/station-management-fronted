import React, {Component} from 'react';
import { useNavigate, Link , useParams } from 'react-router-dom';
import stationApi from '../../utils/api/stationApi.js'

class StationDetail extends Component {
    state = {
        rows: []
    }

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const data = await stationApi.findNurseInfoByStationId(this.props.params.stationId);
        console.log(data);
        this.setState({rows: data.map(r => <tr>
            <td>{r.id}</td>
            <td>{`${r.joinTime[0]}/${r.joinTime[1]}/${r.joinTime[2]} ${r.joinTime[3]}:${r.joinTime[4]}:${r.joinTime[5]}`}</td>
        </tr>)});
    }

    goHome = ()=> {
        this.props.navigation('/');
    }

    saveStation = ()=> {
        
    }

    render() {
        return (
            <div>
                <button onClick={this.goHome}>返回</button>
                <button>儲存</button><br/>
                <label>站點名稱</label><input type="text"></input>
                <h3>站點護士列表</h3>
                <table>
                    <thead>
                        <th>員工編號</th>
                        <th>加入時間</th>
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
    const params = useParams();
    const navigation = useNavigate();
    return <StationDetail  {...props} navigation={navigation} params={params}/>;
};