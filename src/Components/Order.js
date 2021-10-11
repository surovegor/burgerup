import React from 'react';
import styled from 'styled-components';
import { ButtonCheckOut } from './ButtonCheckOut';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    left: 0;
    top: 80px;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850 Руб</TotalPrice>
            </Total>
            <ButtonCheckOut>Оформить</ButtonCheckOut>
        </OrderStyled>
    )
}