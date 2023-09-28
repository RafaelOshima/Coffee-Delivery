import { HeaderContainer, LocationButton, OrdersButton } from './styles'

import logoCoffeeDelivery from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <LocationButton>
          <MapPin size={22} />
          Suzano, SP
        </LocationButton>

        <NavLink to="/orders" title="Orders">
          <OrdersButton>
            <ShoppingCart size={22} />
          </OrdersButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
