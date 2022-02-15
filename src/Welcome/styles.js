import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    height: 50vh ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;  

    .card-header {
        font-size: 30px;        
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`;

export const Form = styled.form`    
    width: 950px;
    height: 50px;    
    padding: 30px;
    border-radius: 10px;
`;


