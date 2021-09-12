import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { TotalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
    `;
export const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;

`;
const OrderList = styled.ul`

`;
export const Total = styled.div`
    display: flex;
    margin:0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;
export const TotalPrice = styled.div`
    text-align: center;
    min-width: 65px;
    margin-left: 20px;
`;
const EmptyList = styled.p`
    text-align: center;
`;




export const Order = () => {
    const {
        auth: { authentication, logIn },
        orders: { orders, setOrders },
        orderConfirm: { setOpenOrderConfirm }
    } = useContext(Context);

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }
    const total = orders.reduce((result, order)=>
    TotalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order)=>
    order.count + result, 0);
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
            {orders.length ? 
            <OrderList>
                {orders.map((order, index) => <OrderListItem 
                key={index}
                order={order}
                deleteItem={deleteItem}
                index={index}
                />)}
            </OrderList> : 
            <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
                    {orders.length ? 
                        <>
                        <Total>
            <span>ИТОГО</span>
                    <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout onClick={() => {
                if(authentication) {
                    setOpenOrderConfirm(true)
                } else {
                    logIn();
                }
            }}>Оформить</ButtonCheckout>
                    </> : null}
        </OrderStyled>
    )
}