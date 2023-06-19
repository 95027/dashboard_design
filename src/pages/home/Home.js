import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';
import Widget from '../../components/widget/Widget';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="home-container">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="list-container">
            <div className="list-title">latest transctions</div>
            <Datatable/>
          </div>
        </div>
    </div>
  )
}

export default Home