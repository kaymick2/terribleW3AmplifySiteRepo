import { getDate } from "./App";
import './Footer.css';
function Footer(){

    return (
      <>
        <div className="footer">
        <h2>This is the end of the page.</h2>
        <div>{getDate()}</div>
      </div>
      </>
    )
}
export default Footer;