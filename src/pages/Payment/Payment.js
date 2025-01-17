import React, { useContext, useEffect } from 'react'
import { ReducerContext } from '../../utils/Reducer'
import NavBar from '../../components/NavBar/NavBar'
import Input from '../../components/Input/Input'
import Summary from '../../components/Summary/Summary'
import Button from '../../components/Button/Button'
import { mock } from '../../api'
import { PayContainerPage, Title, CardContainer, PageSection } from './styles'
import { useHistory } from 'react-router-dom'

const Payment = () => {
  const { state, dispatch } = useContext(ReducerContext)

  useEffect(() => {
    const mockData = async () => {
      const response = await mock()
      dispatch({ type: 'SET_SHOPPING_CART', payload: response })
    }
    mockData()
  }, [dispatch])

  const history = useHistory()

  return (
    <>
      <NavBar active="payment" />

      <PayContainerPage>
        <Title>CARTÃO DE CRÉDITO</Title>

        <CardContainer>
          <PageSection>
            <Input type="submit" />
          </PageSection>
        </CardContainer>

        <Summary
          summary={{
            subTotal: state.shoppingCart.subTotal,
            shipping: state.shoppingCart.shippingTotal,
            discount: state.shoppingCart.discount,
            total: state.shoppingCart.total
          }}
        />
        <Button
          form="form"
          onClick={() => {
            history.push('/checkout')
          }}
          type="submit"
          label="FINALIZAR O PEDIDO"
        />
      </PayContainerPage>
    </>
  )
}

export default Payment
