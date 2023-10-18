import CartWidget from '../cart-widget/CartWidget'
import book from '../../assets/books.svg'

import './navbar.css'

const NavBar = ()=>{
    return(
        <>
            <nav className="navbar">
                    <ul className="nbUl">
                        <li className="nbTitle"> 
                            <img src={book} alt="book" />
                            <span>BookStore</span>
                        </li>
                        <li className="nbCart">
                            <CartWidget/>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default NavBar