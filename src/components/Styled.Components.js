import styled from '@emotion/styled';

export const carosel = styled.div`
    width:100%; 
    height:${_ => _.isMobile ? '150px' : '400px'};`

export const pageHeader = styled.div`
padding: 8% 5% 5% 5%
`

export const pageContent = styled.div`
padding-left: 5%; 
padding-right: 5%;`

export const blockquote = styled.blockquote`
border-left: 2px solid black;
`
export const homeLink = styled.li`
display: inline;`

export const profilePic = styled.img`
box-shadow: 0 0 15px 0 #888888;
border-radius: 50%;`

export const filmPic = styled.img`
width:100%`

export const colorPickerInput = styled.input`
border: 3px solid;
border-adius: 10px;
`