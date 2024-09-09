import { getDate } from "./App";
function Footer(){

    return (
        <div className="footer">
        <h2>Footer</h2>
        <div>{getDate()}</div>
      </div>
      
    )
}
export default Footer;