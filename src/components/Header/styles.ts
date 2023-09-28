import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  img {
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 1.33rem;
  }
`

export const BaseNavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.875rem;
  line-height: 130%;
`

export const LocationButton = styled(BaseNavButton)`
  width: 8.94rem;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
  display: flex;
  gap: 0.25rem;
`

export const OrdersButton = styled(BaseNavButton)`
  width: 2.375rem;
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
`
