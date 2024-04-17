import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.setBackgroundColor || null};
    color: ${props => props.setColor || '#000'};
    font-size: ${props => props.setFontSize || '18px'};
    text-align: ${props => props.setAlignment || 'center'};
    margin: 0;
`