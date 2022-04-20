import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./featured.scss"

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
           <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">TotalSales mode today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments many not be included.
        </p>
        <div className="summary">
          <div className = "item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className = "item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className = "item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured