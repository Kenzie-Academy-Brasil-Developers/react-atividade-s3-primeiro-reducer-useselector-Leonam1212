import styled from "styled-components"

export const Container = styled.div`
    background-color:tomato;
  
    display: flex;
    padding: 10px;
    justify-content: space-around;
    font-family: sans-serif;
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(0,0,0,0.5);
    p {
        
        margin: 50px;
        width: 30%;
        text-shadow: 0 4px 4px rgba(0,0,0,0.5);
    }
 :hover{ 
        background: aqua;
        color: tomato;
        font-size: 26px;
        box-shadow: 0 4px 4px rgba(0,0,0,0.5);
    }
` 