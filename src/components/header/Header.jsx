import './header.scss'
import neflixlogo from '../../assets/netflixheader.png'
function Header() {
  return (
    <div className='header'>

    <div className='header__container'>

        <img src={neflixlogo} alt="neflixlogo" />
        <ul>
            <li>langages</li>
            <li>login</li>
        </ul>
    </div>

    </div>
    
  )
}

export default Header