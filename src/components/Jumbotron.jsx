import iphone from "../assets/images/iphone-14.jpg"
import holdingiphone from "../assets/images/iphone-hand.png"

export default function Jumbotron() {
  const handlelearnmore = ()=>{
    const element =document.querySelector(".sound-section")
    window.scrollTo({
      top:element?.getBoundingClientRect().top,
      left:0,
      behavior: "smooth"
    })
  }
  return (
    <div className='jumbotron-section wrapper'>
        <h2 className="title">New</h2>
        <img src={iphone} alt="" className="logo" />
        <p className="text">Big and bigger.</p>
        <span className="description">
            From $41.62/mo for 24 mo. or $999 before trade-in.
        </span>
        <ul className="links">
            <li>
                <button className="button">Buy</button>
            </li>
            <li><a onClick={handlelearnmore} className="link">Learn more</a></li>
        </ul>
        <img className="iphone-img" src={holdingiphone} alt="iphone" />
    </div>
  )
}
