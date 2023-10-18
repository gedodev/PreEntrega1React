import { Badge } from '@chakra-ui/react'
import cartSVG from '../../assets/shopping-cart.svg'

import './cartWidget.css'


const CartWidget = () => {
    return (
        <>
            <div className="cart">
                <picture>
                <img src={cartSVG} alt="cart logo" />
                </picture>
                <span className='badgeCart'>2</span>
            </div>
        </>
    )
}

export default CartWidget