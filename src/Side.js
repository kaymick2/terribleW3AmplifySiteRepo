import './Side.css';
export function Side(){
    return (
        
        <div className="side">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div className="fakeimg" style={{height:'200px'}}><img src={require('./me.png')} style={{height:'100%', width:'100%', objectFit:'contain'}} alt='me'/></div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3>me at a bar 2 weeks ago</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div className="fakeimg" style={{height:'180px'}}> <img src={require('./this is also me.JPG')} style={{height:'100%', width:'100%',objectFit:'contain'}} alt="me "/></div><br/>
        <div className="fakeimg" style={{height:'60px'}}>naooooooo</div><br/>
        <div className="fakeimg" style={{height:'60px'}}>Image</div>
      </div>
      
    )
}
export default Side;