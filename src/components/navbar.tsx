import styled from 'styled-components';

const Brbigconteynor = styled.div`
  display: flex;
width: 100%;
padding: 15px 80px;
margin-top: 20px;
gap: 100px;
justify-content: center;
align-items: center;
border-radius: 15px;
background: var(--Gray-Scale-0, #FFF);
box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
position: fixed; 
  
  z-index: 1000; 

`;
const Nrlogo = styled.div`
width: 225px;

   img {height:50px;
   } 
`;
const Nrmenu = styled.div`
    display: flex;
align-items: flex-start;
gap: 45px;
h1{color: var(--Gray-Scale-60, #5C5C5C);
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 120% */
letter-spacing: 0.1px;
text-transform: uppercase;
transition: color 0.3s ease, transform 0.3s ease;
cursor: pointer;
}

h1:hover {
  color: #767171;           
  transform: scale(1.05); }
`
const Nricon = styled.div`
   width: 130px;
   gap: 11px;
`

const Navbarcomponents = () => {
  return (
    <Brbigconteynor>
    <Nrlogo>
    <img src="https://iparbio.com/public/images/icon/iparLogo.png"></img>
    </Nrlogo>

    <Nrmenu>
    <h1 style={{ color: 'var(--Secondary-50, #80B4FF)' }}>Home</h1>

<h1>Personal Care</h1>
<h1>Family Care</h1>
<h1>Blog</h1>
<h1>Brand</h1>
<h1>pages</h1>

    </Nrmenu>

<Nricon>
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <g clip-path="url(#clip0_33_1228)">
    <path d="M14.5 20C17.8137 20 20.5 17.3137 20.5 14C20.5 10.6863 17.8137 8 14.5 8C11.1863 8 8.5 10.6863 8.5 14C8.5 17.3137 11.1863 20 14.5 20Z" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.5 24L19.5 19" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_33_1228">
      <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <g clip-path="url(#clip0_33_1232)">
    <path d="M16.5 15C18.7091 15 20.5 13.2091 20.5 11C20.5 8.79086 18.7091 7 16.5 7C14.2909 7 12.5 8.79086 12.5 11C12.5 13.2091 14.2909 15 16.5 15Z" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 25V23C10.5 21.9391 10.9214 20.9217 11.6716 20.1716C12.4217 19.4214 13.4391 19 14.5 19H18.5C19.5609 19 20.5783 19.4214 21.3284 20.1716C22.0786 20.9217 22.5 21.9391 22.5 23V25" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_33_1232">
      <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <path d="M6.99967 22.5335C8.19629 22.5335 9.16634 21.5635 9.16634 20.3669C9.16634 19.1702 8.19629 18.2002 6.99967 18.2002C5.80306 18.2002 4.83301 19.1702 4.83301 20.3669C4.83301 21.5635 5.80306 22.5335 6.99967 22.5335Z" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.1335 22.5335C20.3301 22.5335 21.3001 21.5635 21.3001 20.3669C21.3001 19.1702 20.3301 18.2002 19.1335 18.2002C17.9368 18.2002 16.9668 19.1702 16.9668 20.3669C16.9668 21.5635 17.9368 22.5335 19.1335 22.5335Z" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6997 18.2001H6.96634V3.4668H4.83301" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.43359 5.2002L22.1669 6.28353L21.1145 13.8669H7.43359" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</Nricon>


    </Brbigconteynor>
  )
}

export default Navbarcomponents;