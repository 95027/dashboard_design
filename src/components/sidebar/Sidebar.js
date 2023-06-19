import  './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li><DashboardIcon className='icon'/><span>dashboard</span></li>
          <p className="title">lists</p>
          <li><PersonOutlineIcon className='icon'/><span>users</span></li>
          <li><StoreIcon className='icon'/><span>products</span></li>
          <li><CreditCardIcon className='icon'/><span>orders</span></li>
          <li><LocalShippingIcon className='icon'/><span>delivery</span></li>
          <p className="title">useful</p>
          <li><InsertChartIcon className='icon'/><span>statistics</span></li>
          <li><NotificationsNoneIcon className='icon'/><span>notifications</span></li>
          <p className="title">service</p>
          <li><SettingsSystemDaydreamIcon className='icon'/><span>system health</span></li>
          <li><PsychologyIcon className='icon'/><span>logs</span></li>
          <li><SettingsApplicationsIcon className='icon'/><span>settings</span></li>
          <p className="title">user</p>
          <li><AccountCircleIcon className='icon'/><span>profile</span></li>
          <li><ExitToAppIcon className='icon'/><span>logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  )
}

export default Sidebar