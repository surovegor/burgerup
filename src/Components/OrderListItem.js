import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0 15px;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>S</ItemName>
        <span>A</span>
        <ItemPrice>f</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
);