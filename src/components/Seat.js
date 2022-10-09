import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


function Seat(props) {

    const [color, setColor] = useState("#C3CFD9");
    const [border, setBorder] = useState("#808F9D");
    const [selected, setSelected] = useState(false);

    const { available, name, reserved, setReserved } = props;

    useEffect(() => {
        changeColor(available);
    }, [])

    function changeColor(state, selected, e = "") {
        if (!state) {
            setColor("#FBE192");
            setBorder("#F7C52B");
        } else if (state && e && !selected) {
            setColor("#1AAE9E");
            setBorder("#0E7D71");
            setSelected(true);
            reserveSeat(e);
        } else if (selected && e) {
            setColor("#C3CFD9");
            setBorder("#808F9D");
            setSelected(false);
            reserveSeat(e, true);
        }
    }

    function reserveSeat(e, remove = false) {
        if (reserved.includes(Number(e.innerText)) && remove) {
            const index = reserved.indexOf(Number(e.innerText));
            reserved.splice(index, 1);
            setReserved(reserved);
        } else {
            const newReserve = [...reserved];
            newReserve.push(Number(e.innerText));
            setReserved(newReserve);
        }
    }

    return (
        <SeatComp color={color} border={border} available={available} onClick={(event) => changeColor(available, selected, event.target)}>{name}</SeatComp>
    )
}

const SeatComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.color};
    border: ${(props) => props.color};
    border-radius: 12px;
    font-size: 11px;
    user-select: none;
    cursor: ${(props) => props.available ? "pointer" : "not-allowed"};
`;

export default Seat;