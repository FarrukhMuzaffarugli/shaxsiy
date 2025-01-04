import styled from 'styled-components'
import iparImage from '../Rasm/ipar.webp'


export const Contenor2 = styled.div`
width: 15%;
height: 800px;
display: flex;
padding-top:53px;
img {
    width: 286px;
height: 232px;
flex-shrink: 0;
}
`

export const Contenor = styled.div`
width: 15%;
height: 800px;
display: flex;
align-items: end;

`
export const Contenor1 = styled.div`
width: 70%;
height: 100%;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10px;
h2 {color: var(--Secondary-90, #2D3F59);
text-align: center;
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;}

`

export const Bigcontenor2 = styled.div`
width: 100%;
height:1000px;
display: flex;
align-items: center;
margin-top: 50px;
`

export const Bigconteynormenu = styled.div`
    p{
    color: var(--Secondary-90, #2D3F59);
font-family: Jost;
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: 40px; /* 153.846% */
text-transform: uppercase;
}
h1{
color: #2D3F59;
font-family: Jost;
font-size: 96px;
font-style: normal;
font-weight: 600;
line-height: 104px;
letter-spacing: -1.44px;

}
button {
    display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 66px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
color: var(--Gray-Scale-0, #FFF);
width: 156px;
height: 56px;
/* Button/SemiBold */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
text-transform: uppercase;
}
display: flex;
flex-direction: column;
align-items: center;
width: 768px;
height: 368px;
`

export const Bigconteyno = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export const Bigconteynor = styled.div`
width: 100%;
aspect-ratio: 16 / 9;
background-image: url('https://avatars.mds.yandex.net/i?id=9e09de6bb43846bc40d023f86ef719b1_l-5252083-images-thumbs&n=13'); 
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center;
 

display: flex;
flex-direction: column;
align-items: end;
justify-content: center;
padding: 0px 80px;
flex-shrink: 0;


`
export const Conteynormenu1 = styled.div`
display: flex;
gap: 7px;
h1 {color: #80B4FF;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
text-transform: uppercase;}

svg {
    width: 24px;
height: 24px;
}
`

export const Conteynormenu2 = styled.div`
width: 100%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;
gap: 25px;

`
export const Menu1 = styled.div`
display: flex;
flex-direction: column;
width: 25%;
height:700px;


`
export const Menu2 = styled.div`
width: 50%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
gap: 80px;

img {width:100%;

}
h3{
    color: #637DA2;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.03px;
text-transform: uppercase;
text-align: center;
}

`
export const Menu3 = styled.div`
height:400px;
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
gap: 15px;
p{color: var(--Gray-Scale-50, #727272);
text-align: center;

/* Body 1/Regular */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;}

img{
    display: flex;
width: 100px;
height: 100px;
}
h3{
    color: #637DA2;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 120% */
letter-spacing: 0.03px;
text-transform: uppercase;
text-align: center;
}
`
export const Bigconteynor3 = styled.div`
display:flex;
flex-direction: column;
width: 100%;
height: 947px;
flex: none;

align-items: center;
background-image: url(${iparImage});
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  border: solid 1px black;
  align-items: center;
  padding-top: 125px;
  h2{
    color: var(--Secondary-90, #2D3F59);
text-align: center;
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
  }
`
export const Contenor3menu = styled.div`
display: flex;
margin-top: 40px;
height: 598px;
width: 100%;
justify-content: center;
align-items: center;
gap: 78px;

`
export const Contenor3menu1 = styled.div`
display: flex;
flex-direction: column;
width: 139px;
height: 600px;

`
export const Contenor3menu2 = styled.div`
display: flex;
flex-direction: column;
width: 501px;
height: 568px;

`
export const Contenor3menu3 = styled.div`
display: flex;
width: 645px;
height: 568px;
align-items: center;

`
export const Contenor3menu4 = styled.div`
width: 94px;
height: 472px;
display: inline-flex;
position: absolute;
padding: 40px 20px;
flex-direction: column;
align-items: center;

z-index: 20;
gap: 20px;
border-radius: 100px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));

p{color: var(--Gray-Scale-0, #FFF);
text-align: center;

/* H4/SemiBold */
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 117.647% */
letter-spacing: 0.085px;}
h6{
    color: var(--Gray-Scale-0, #FFF);
text-align: center;
padding-bottom:10px;
/* H6/Medium */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
border-bottom: solid 1px white;
}

`
export const Contenor3menu5 = styled.div`
display: flex;
flex-direction: column;
padding: 50px 50px 100px 80px;

margin-left: 47px;
width: 593px;
height: 568px;
border-radius: 15px;
background: var(--Gray-Scale-0, #FFF);
box-shadow: 0px 6px 10px 0px rgba(121, 99, 104, 0.14);

h1{color: var(--Secondary-90, #2D3F59);

font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: 40px; /* 117.647% */
letter-spacing: 0.085px;
}
h2{
 color: var(--Secondary-50, #80B4FF);
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
justify-content: start;
text-align: left;
margin-top:20px;
}
h3{color: var(--Gray-Scale-50, #727272);
text-align: center;
font-family: Jost;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 107.692% */
letter-spacing: 0.039px;
text-decoration: line-through;}

p{color: var(--Gray-Scale-50, #727272);
    height: 129px;
/* Body 1/Regular */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
margin-top:40px}

`

export const  Contenor3menu6 = styled.div`
height:56px;
width: 100%;
display: flex;
margin-top: 40px;
gap: 15px;
button {display: flex;
    width: 199px;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 56px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
img{width: 19.5px;
    height: 19.5px;}
}

button:hover {
  background-color: #0056cc; 
  transform: scale(1.05); 
}

button:active {
  background-color: #004499; 
  transform: scale(0.95); 
}

h4{
    color: var(--Gray-Scale-0, #FFF);

/* Button/SemiBold */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
text-transform: uppercase;
white-space: nowrap;
}
`
export const FancyButton = styled.button`
  position: relative;
  display: flex;
  padding: 12px 24px;
  color: #ffffff;
  background-color:rgb(56, 13, 245);
  border: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden; 


  font-size: 16px;
  transition: transform 0.3s ease, background-color 0.3s ease;

 
  &:hover {
    background-color: #45a049; 
    transform: translateY(-2px);}
   
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -40%;       
    width: 40%;         
    height: 100%;
    background: rgba(255, 255, 255, 0.2); 
   
    transform: skewX(-15deg);
    transition: all 0.5s ease; 
    
  }

  &:hover::before {
    left: 100%; 
  }
`
export const Bigcontenor4 = styled.div`
width: 100%;
height: 584px;
display: flex;
flex-direction: column;
padding: 0 5%; 
margin-top: 100px;

`
export const Bigcontenor4navbar = styled.div`
width:100%;
height: 84px;
display: flex;
justify-content: space-between;
align-items: end;
`
export const N4navbar = styled.div`
display: flex;
flex-direction: column;
width: 317px;
height: 84px;

img{width:173px;
height: 28px;

}
h1{color: var(--Secondary-90, #2D3F59);
font-family: Jost;
font-size: 47px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
}
`
export const N4navbar1 = styled.div`
display: flex;
height: 32px;
width: 76%;
position: relative; 
  justify-content: end;
 
  &::before {
    content: "";
    position: absolute;
    top: 50%;               
    left: 0;
    width: 85%;         
    height: 1px;       
    background-color: #00000029;  
    transform: translateY(-50%); 
   
  }
`
export const B4menu = styled.div`
display: flex;
height: 447px;
width: 100%;
gap: 30px;
margin-top: 50px;
`

export const B4menu1 = styled.div`
width: 338px;
height: 447px;
flex-shrink: 0;
display: flex;
flex-direction: column;
padding: 40px;
gap: 15px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 90%, 0 100%); 
border-radius: 5%;
h1{color: #FFF;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
text-transform: capitalize;
transition: color 0.3s ease, transform 0.3s ease;
cursor: pointer;
}

h1:hover {
  color: #ddd;           
  transform: scale(1.05); }
`
export const B4menu2 = styled.div`
display: flex;
width: 337px;
height: 447px;
flex-direction: column;
align-items: center;
border-radius: 15px;



h6{
  color: var(--Secondary-90, #2D3F59);
text-align: center;

/* Body 1/Medium */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
}
h2{
  color: var(--Secondary-50, #80B4FF);

/* H6/SemiBold */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.03px;
}
`

export const Bigcontenor5 = styled.div`
display: flex;
width: 100%;
height: 394px;
margin-top: 100px;
padding: 0 5%;
gap: 30px;
justify-content: center;
`
export const Big5menu = styled.div`
width: 467px;
height: 394px;
flex-shrink: 0;
padding: 3%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 22px;
p{color:rgb(169, 7, 9);
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;}
h1{width:234px;
  color: var(--Secondary-90, #2D3F59);

/* H3/SemiBold */
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}
button{
  width: 156px;
  height: 56px;
  display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 66px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
}
button:hover {
  background-color: #0056cc; 
  transform: scale(1.05); 
}

button:active {
  background-color: #004499; 
  transform: scale(0.95); 
}
border-radius: 15px;
background: var(--Gray-Scale-5, #D9D9D9);
background-image:url("https://i.ytimg.com/vi/CNpgmDW1sfw/maxresdefault.jpg");
background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;

`
export const Big5menu1 = styled.div`
padding: 3%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 22px;
width: 382px;
height: 394px;
flex-shrink: 0;
border-radius: 15px;
p{color:rgb(169, 7, 9);
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;}
h1{width:234px;
  color: var(--Secondary-90,rgb(17, 226, 35));

/* H3/SemiBold */
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}
button{
  width: 156px;
  height: 56px;
  display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 66px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
}
button:hover {
  background-color: #0056cc; 
  transform: scale(1.05); 
}

button:active {
  background-color: #004499; 
  transform: scale(0.95); 
}
background-image:url("https://avatars.mds.yandex.net/i?id=8db454fc31ae5bf4ccb864dd9aefcda5276b3264-9246177-images-thumbs&n=13");
background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
`
export const Big5menu2 = styled.div`
width: 467px;
height: 394px;
flex-shrink: 0;
border-radius: 15px;
padding: 3%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 22px;
p{color:rgb(169, 7, 9);
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;}
h1{width:234px;
  color: var(--Secondary-90,rgb(9, 206, 88));

/* H3/SemiBold */
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}
button{
  width: 156px;
  height: 56px;
  display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 66px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
}
button:hover {
  background-color: #0056cc; 
  transform: scale(1.05); 
}

button:active {
  background-color: #004499; 
  transform: scale(0.95); 
}
background: var(--Gray-Scale-5, #D9D9D9);
background-image:url("https://avatars.mds.yandex.net/i?id=6d87959184dd80d5ddff14a35b21d9129f35434e-10129407-images-thumbs&n=13");
background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;

`

export const Ioverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(234, 230, 230, 0.4);
  display: flex;
  align-items: end;
  justify-content: center;
  opacity: 0; 
  transition: opacity 0.3s ease;
`;
export const Imagewrapper = styled.div`
position: relative; 
display: inline-block;
img{
  width: 300px;
height: 339px;
flex-shrink: 0;
}
button{display: inline-flex;

align-items: flex-start;
gap: 12px;
border-radius: 40px;
background: rgba(128, 180, 255, 0.40);
img{
  width: 40px;
  height: 40px;
}
}
&:hover ${Ioverlay} {
    opacity: 1;
  }
`