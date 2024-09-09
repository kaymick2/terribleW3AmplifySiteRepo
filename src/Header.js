import { getDate } from "./App";
function Header(){
    return (
        <main>
            <div className="header">
            <h1>ripoff w3schools website</h1>
            <p><div>{getDate()}</div></p>
        </div><div className="navbar">
                <a href="https://www.instagram.com/kmickCSX">Instagram</a>
                <a href="https://www.soundcloud.com/boxtoaster">SC</a>
                <a href="https://kaymick.net">my ACTUAL website</a>
                <a href="https://www.youtube.com/watch?v=JJxvEywuQPQ" className="OS ALOPRADOS MALTRATAR MUSICA FUNK ANTIGA">Link</a>
            </div>
            
            
            </main>
      
    )
}
export default Header;