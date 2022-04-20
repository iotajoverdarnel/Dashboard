import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {
    
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
        <div className = "top">
            <Link to="/" style={{ textDecoration:"none"}}>
                <span clasName ="imageLogo"> <LocalFireDepartmentSharpIcon className='icon'/> </span>
                <span className="logo">IoTAjover</span>
            </Link>
        </div>
        <div className = "center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration:"none"}}>
                    <li>
                        <PersonOutlineRoundedIcon className="icon" />
                        <span>User</span>
                    </li>
                </Link>
                <Link to="/products" style={{ textDecoration:"none"}}>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon" />
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className = "bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar