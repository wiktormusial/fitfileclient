import styled from "styled-components";

const Card = styled.div`
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    background-color: white;
    &: hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`

export const CardIndex = styled(Card)`
    text-align: center;
    padding: 3em;
`

export default Card