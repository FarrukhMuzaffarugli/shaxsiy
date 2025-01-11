import styled from 'styled-components'
import iparImage from '../Rasm/ipar.webp'
import backgrstol from '../Rasm/batlegraundga.webp'
import sariq from '../Rasm/Backgroundsariq-cropped-cropped.svg'
import protain from "../Rasm/protain1.jpg"
import imunutet from "../Rasm/imunutet.jpg"
import ukol from "../Rasm/ukol.svg"
import bugdoy from "../Rasm/bugdoy.svg"

// Props tipini aniqlash
interface BigconteynorProps {
  bgImage: string;
}

interface DotProps {
  active: boolean;
}


export const Contenor1 = styled.div`
height: 100%;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10px;
width:100%
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
justify-content: center;
height:1000px;
padding: 0 5%;
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

button:hover {
  background-color: #0056cc; 
  transform: scale(1.05); 
}

button:active {
  background-color: #004499; 
  transform: scale(0.95); 
}

display: flex;
flex-direction: column;
align-items: center;
width: 768px;
height: 368px;
margin-top: 200px;
`
export const Bigconteynormenuu = styled.div`
   
display: flex;
flex-direction: column;
align-items: center;
width: 670px;
height: 368px;
`

export const Bigconteyno = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`

export const Bigconteynor = styled.div <BigconteynorProps>`
  width: 100%;
  height: 850px;

  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
justify-content:center;
  flex-shrink: 0;
  position: relative;
`;


export const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;


export const Dot = styled.div<DotProps>`
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? "#ffffff" : "#aaaaaa")};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #ffffff;
    transform: scale(1.1);
  }
`;
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
width: 223px;
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

img {width:535px;

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
padding: 0 5%;
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
  width: 32px;
  height: 32px;
  padding: 12px 24px;
  color: #ffffff;
  background-color: rgba(209, 205, 205, 0.98);
  border: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden; 


  font-size: 16px;
  transition: transform 0.3s ease, background-color 0.3s ease;

 
  &:hover {
    background-color: #80B4FF; 
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
align-items: center;
padding: 0 5%; 
margin-top: 100px;

`
export const Bigcontenor4navbar = styled.div`
width:1365px;
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
justify-content: center;
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
width: 327px;
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

width: 458px;
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
width: 458px;
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
export const B4menu12 = styled.div`
width: 338px;
height: 447px;
flex-shrink: 0;
display: flex;

flex-direction: column;
padding: 40px;
gap: 15px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
 
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
export const Bigcontenor6 = styled.div`
display: flex;
width: 100%;
height: 605px;
margin-top: 100px;
justify-content: center;

`
export const Bigcontenor61 = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 491px;
flex-shrink: 0;
background: var(--Gray-Scale-5, #D9D9D9);
justify-content: center;
background: url(${backgrstol}) no-repeat center center;
background-size: cover;
padding: 0 5%;
gap: 250px;
img{
  width: 582px;
height: 605px;
flex-shrink: 0;
}
`
export const Bigcontenor62 = styled.div`
width: 557px;
height: 272px;
gap: 20px;
display: flex;
flex-direction: column;
align-items: center;
p{
  color: var(--Gray-Scale-0, #FFF);

/* H6/Medium */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
}
h2{
  color: var(--Gray-Scale-0, #FFF);

/* H4/Bold */
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 40px;
letter-spacing: 0.085px;
}
h1{
  color: #FFF;
text-align: center;

/* H2/SemiBold */
font-family: Jost;
font-size: 60px;
font-style: normal;
font-weight: 600;
line-height: 68px; /* 113.333% */
letter-spacing: -0.3px;
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

`
export const Bigcontenor7 = styled.div`
width: 100%;
height: 798px;
margin-top:100px;
display: flex;
flex-direction: column;
align-items: center;
flex-shrink: 0;
background: url("https://stmedicalbeauty.com/img/my-shop-logo-1477732258.jpg") no-repeat center center;
background-size: cover;
`
export const Bigcontenor71 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
gap: 4px;
width: 551px;
height: 84px;
h2{background-color: black;
  color: #FFF;
text-align: center;
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}

`

export const Bigcontenor72 = styled.div`
display: flex;
align-items: center;
background-color: black;
p{
  color: #FFF;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
text-transform: uppercase;
}
img{
  width: 24px;
height: 24px;
}

`
export const Bigcontenor73 = styled.div`
width: 100%;
height: 467px;
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
margin-top: 100px;
justify-content: center;

`
export const Bigcontenor74 = styled.div`
width: 430px;
height: 415px;
background-color: white;
border-radius: 15px;
background: var(--Gray-Scale-0, #FFF);
display: flex;
flex-direction: column;
align-items: center;
padding: 0 25px;
h3{
  color: var(--Secondary-90, #2D3F59);
text-align: center;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.03px;
text-transform: uppercase;
margin-top: 17px;
}

p{
  color: var(--Gray-Scale-70, #454545);
text-align: center;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.024px;
text-transform: capitalize;
}

img {
  border: solid 1px red;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-top: -62.5px; 
}

`
export const Bigcontenor8 = styled.div`
  background: url(${sariq});
  background-size: contain; 
  background-position: center;
  gap: 60px;
  width: 100%;
  height: 825px;
  padding: 0 5.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bigcontenor81 = styled.div`
display: flex;
flex-direction: column;

width: 767px;
height: 625px;

p{
  color: #80B4FF;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
text-transform: uppercase;
};
h1{
  color: var(--Secondary-90, #2D3F59);
text-align: start;
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
};
h3{
  color: var(--Secondary-80, #405A80);
text-align: center;

/* H6/SemiBold */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.03px;
}


`
export const Bigcontenor9 = styled.div`
display: flex;
justify-content:center;
padding: 0 5%;
width: 100%;
height: 328px;
gap: 77px;
background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));

`
export const Bigcontenor91 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 176px;
height: 204px;
margin-top: 50px;
img{
  display: flex;
 
width: 120px;
height: 120px;
justify-content: center;
align-items: center;
border-radius: 1000px;
border: 2px dashed var(--Secondary-05, #F2F7FF);
}

h1{
  color: var(--Background-Elevation-Light-24, #FFF);
text-align: center;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
text-transform: uppercase;
margin-top: 12px;
}
p{
  color: var(--Secondary-05, #F2F7FF);
text-align: center;

/* Body 1/Regular */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;

}

`

export const Bigcontenor10 = styled.div`
display: flex;
justify-content:center;
width: 100%;
height: 372px;
margin-top: 100px;
padding: 0 5%;
gap: 31px;
`

export const Bigcontenor101 = styled.div`
display: flex;
flex-direction: column;
border-radius: 15px;
width: 704px;
padding: 14px 48px;
height: 372px;
background: url(${protain}) no-repeat center center;
background-size: cover;
button{
  margin-top: 22px;
  width: 156px;
  height: 56px;
  display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
color: var(--Gray-Scale-0, #FFF);

/* Button/SemiBold */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
text-transform: uppercase;
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
p{
  margin-top: 61px;
  color: var(--Secondary-90, #2D3F59);

/* H6/Medium */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
}

h1{
  margin-top: 16px;
  color: var(--Secondary-90, #2D3F59);
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: 40px; /* 117.647% */
letter-spacing: 0.085px;
text-transform: uppercase;
}

`

export const Bigcontenor102 = styled.div`
display: flex;
padding: 14px 48px;
flex-direction: column;
border-radius: 15px;
width: 704px;
height: 372px;
border: solid 0.5px gray;
background: url(${imunutet}) no-repeat center center;
background-size: cover;
button{
  margin-top: 22px;
  width: 156px;
  height: 56px;
  display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
color: var(--Gray-Scale-0, #FFF);

/* Button/SemiBold */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
text-transform: uppercase;
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
p{ 
  margin-top: 61px;
  color: var(--Secondary-90, #2D3F59);

/* H6/Medium */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
}

h1{
  margin-top: 16px;
  color: var(--Secondary-90, #2D3F59);
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: 40px; /* 117.647% */
letter-spacing: 0.085px;
text-transform: uppercase;
}

`

export const Bigcontenor11 = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  height: 577px;
  margin-top: 100px;
  background-color: var(--Secondary-10, #D3E5FF); /* Orqa fon rangi */
  background-image: url(${ukol}); /* Rasm */
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 288.604px 563px;
  padding: 0 5%;
  gap: 135px;
`;


export const Bigcontenor111 = styled.div`
display: flex;
flex-direction: column;
width: 691px;
height: 470px;
gap: 49px;
margin-top: 82px;

h1{
  color:rgb(5, 39, 86);
font-family: Jost;
font-size: 20.5px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
width: 681px;
}
p{
  margin-top: 110px;
  color: #727272;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
}

`

export const Bigcontenor112 = styled.div`
display: flex;
flex-direction: column;
width: 441px;
height: 490px;
margin-top:50px;
`

export const Divider = styled.div`
  margin: 14px;
  width: 100%;
  color: var(--Secondary-90, #2D3F59);

  /* Matn uslubi */
  font-family: Jost, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.03px;
  position: relative;
  text-align: center; /* Matnni markazga hizalash */

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(50% - 40px); /* Chiziq uzunligini hisoblash */
    height: 1px; /* Chiziq qalinligi */
    background-color: var(--Background-Elevation-Light-02, #D9D9D9); /* Chiziq rangi */
  }

  &::before {
    left: 0; /* Chap tomon */
  }

  &::after {
    right: 0; /* O'ng tomon */
  }
`;

export const Bigcontenor12 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 645px;
  padding: 0 5%;
  background-color: var(--Secondary-80, #405A80); 
  background-image: url(${bugdoy}); 
  background-position: center; 
  background-repeat: repeat; 
  background-size: contain; 
  margin-top: 100px;
  gap: 30px;
`;

export const Bigcontenor121 = styled.div`
display: flex;
flex-direction: column;
width: 320px;
height: 421px;
margin-top: 112px;

p{
  color: var(--Secondary-50, #80B4FF);
font-family: Jost;
font-size: 20.5px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
text-transform: uppercase;
}

h1{
  color: var(--Gray-Scale-0, #FFF);
margin-top: 4px;

/* H3/SemiBold */
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}
h6{
  color: var(--Gray-Scale-0, #FFF);
margin-top: 20px;
/* Body 1/Regular */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
}

`

export const Divyurak1 = styled.div`
display: flex;
align-items: center;
gap: 7px;
img{
  width:24px;
  height: 24px;
}
p{
  color: var(--Secondary-50, #80B4FF);
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
text-transform: uppercase;
}

`
export const Bigcontenor122 = styled.div`
display: flex;
flex-direction: column;
width: 320px;
height: 421px;
margin-top: 112px;
border: solid 1px black;
border-radius: 15px;


img{
  width: 320px;
height: 224px;
background-color:  #D9D9D9;
border-radius: 15px 15px 0px 0px;
}



`
export const Bigcontenor123 = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
height: 197px;
width: 320px;
gap: 20px;
background: var(--Gray-Scale-0, #FFF);
border-radius: 0px 0px 15px 15px;
h1{
  color: var(--Secondary-90, #2D3F59);
width: 100%;
height: 56px;
/* H6/Medium */
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
}

`
export const Bigcontenor124 = styled.div`
display: flex;
align-items: center;
height: 24px;
width: 96px;

h5{
  color: var(--Gray-Scale-50, #727272);
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.035px;
text-transform: capitalize;
}

img{
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: none;
}
`
export const Bigcontenor1241 = styled.div`
display: flex;
align-items: center;
height: 24px;
width: 83px;

h5{
  color: var(--Gray-Scale-50, #727272);
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.035px;
text-transform: capitalize;
}

img{
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: none;
}
`

export const Bigcontenor125 = styled.div`
display: flex;
align-items: center;
gap: 6px;
height: 37px;

h5{
  color: var(--Gray-Scale-50, #727272);

/* Body 1/Regular */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
}
h6{
  color: var(--Gray-Scale-50, #727272);

/* Body 1/Medium */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.08px;
}
img{
  width: 37px;
  height: 37px;
  background-color: white;
  border-radius: none;
  border-radius: 37px;
}
`

export const BadgeContainer = styled.div`
  position: absolute;
  top: 10px;
  right: -10px;
  background: #80b4ff; /* Badge fon rangi */
  color: var(--Gray-Scale-0, #fff); /* Matn rangi */
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.035px;
  padding: 5px 10px;
  border-radius: 30px 0px 0px 30px; /* Burchaklar uchun radius */
  width: 82px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px; 
    right: 0px;  
    width: 8.5px; 
    height: 10px;
    background-color: #5691e0; 
    clip-path: polygon(0 0, 100% 0, 0 100%); 
  }
`;

export const Bigcontenor13 = styled.div`
display: flex;
justify-content: center;
padding: 0 5%;
margin-top: 100px;
width: 100%;
height: 636px;
gap: 40px;

`
export const Bigcontenor131 = styled.div`
display: flex;
margin-top: 43px;
flex-direction: column;
width: 602px;
height: 636px;

h1{
  color: var(--Secondary-90, #2D3F59);
margin-top: 4px;
/* H3/SemiBold */
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}
h2{
  margin-top: 21px;
  color: var(--Gray-Scale-50, #727272);

/* Body 1/Regular */
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
width: 581px;
height: 152px;
}
h3{
  
}

`
export const UploadButton = styled.button`
margin-top: 27px;
padding: 10px 20px;
background: linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%);
box-shadow: 0px 6px 10px 0px rgba(121, 99, 104, 0.14);
color: var(--Gray-Scale-0, #FFF);
font-family: Jost, sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px;
letter-spacing: 0.08px;
text-transform: uppercase;
border: none;
border-radius: 66px;
cursor: pointer;
width: 164px;
height: 56px;
transition: all 0.3s ease;

&:hover {
  background-color: #0056cc;
  transform: scale(1.05);
}

&:active {
  background-color: #004499;
  transform: scale(0.95);
}
`;


export const Bigcontenor132 = styled.div`
display:grid;
grid-template-areas:" 1 1 ";
width: 754px;
height: 636px;
gap: 30px;
img{
  width: 362px;
  height: 303px;
}

`
export const Ovozlar = styled.div`
  display: flex; /* Inline-flex o'rniga flex */
  margin-top: 116px;
  padding: 30px 60px;
  align-items: flex-end;
  gap: 90px; /* Gapni olib tashladik, chunki chiziq uchun border ishlatamiz */
  width: 791px;
  height: 145.5px;
  border-radius: 15px;
  background: var(--Gradient-color, linear-gradient(180deg, #8DC8FF 0%, #80B4FF 100%));
  z-index: 10;

  /* Ichki divlar */
  & > div {
    flex: 1; /* Har bir div bir xil kenglikka ega bo'ladi */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

 
  & > div:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -40px;
    top: 0;
    height: 100%;
    width: 1px;
    background: white; 
  }
`;

export const Ovozlar1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 4px;
h3{
  color: #FFF;
font-family: Jost;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 140% */
letter-spacing: 0.03px;
}
h4{
  color: var(--Gray-Scale-0, #FFF);

/* H3/SemiBold */
font-family: Jost;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 108.333% */
text-transform: capitalize;
}
`

export const Footerdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 99vw;
  height: 826px;
  padding: 0 5%;
  align-items: center;
  background: linear-gradient(to bottom, transparent 19.5%, #405A80 19.5%);

  @media (max-width: 1300px) {
    width: 100%;
  }

`;

export const Footerdiv1 = styled.div`
display: flex;
justify-content: center;
gap: 30px;
height: 323px;

img{
  width: 320px;
  height: 323px;
  transition: transform 0.3s ease;
   border-radius: 50%;
&:hover {
  transform: scale(1.1);
  cursor: pointer;
}

}

`
export const Footerdiv00 = styled.div`
display: flex;
justify-content: center;
gap: 200px;
margin-top: 80px;
`

export const Footerdiv2 = styled.div`
display: flex;
flex-direction: column;
width: 337px;
height: 260px;


h1{
  color: #FFF;
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 117.647% */
letter-spacing: 0.085px;
}

p{
  color: var(--Gray-Scale-0, #FFF);
margin-top: 30px;
/* Body 1/Bold */
font-family: Jost;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
}
input {
  margin-top: 20px;
  height: 37px;
  width: 100%;
  background-color: #405A80;
  border: none;
  border-bottom: solid 1px white;
 

color: white;
font-family: Jost;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.08px;
}

input::placeholder {
  color: var(--Gray-Scale-0, #FFF);

  /* Body 1/Bold */
  font-family: Jost, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.08px;
}

button {
  margin-top: 26px;
  width: 123px;
  height: 56px;
  display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 5px;
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




`

export const Footerdiv3 = styled.div`
display: flex;
flex-direction: column;
width: 279px;
height: 260px;

h1{
  color: var(--Gray-Scale-0, #FFF);

/* H4/Medium */
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 117.647% */
letter-spacing: 0.085px;
}



`

export const Footerdiv3button = styled.div`
  display: flex;
  height: 48px;
  gap: 20px;
  margin-top: 30px;
  button {
   
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    color: var(--Gray-Scale-0, #FFF);
    background: #405A80;
    /* H6/Medium */
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
    border-radius: 5px;
    border: 1px solid var(--Gray-Scale-0, #FFF);
    transition: all 0.3s ease; /* Animatsiya qo'shildi */
  }

  button:hover {
    background-color: #506A99; /* Hover uchun fon rangi */
    transform: scale(1.05);
  }

  button:active {
    background-color: #305070; /* Active uchun fon rangi */
    transform: scale(0.95);
  }
`;

export const Footerdiv3button1 = styled.div`
display: flex;
height: 48px;
gap: 20px;
margin-top: 20px;
button {
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    color: var(--Gray-Scale-0, #FFF);
    background: #405A80;
    /* H6/Medium */
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
    border-radius: 5px;
    border: 1px solid var(--Gray-Scale-0, #FFF);
    transition: all 0.3s ease; /* Animatsiya qo'shildi */
  }

  button:hover {
    background-color: #506A99; /* Hover uchun fon rangi */
    transform: scale(1.05);
  }

  button:active {
    background-color: #305070; /* Active uchun fon rangi */
    transform: scale(0.95);
  }

`
export const Footerdiv3button2 = styled.div`
display: flex;
height: 48px;
gap: 20px;
margin-top: 20px;
button {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    color: var(--Gray-Scale-0, #FFF);
    background: #405A80;
    /* H6/Medium */
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.03px;
    border-radius: 5px;
    border: 1px solid var(--Gray-Scale-0, #FFF);
    transition: all 0.3s ease; /* Animatsiya qo'shildi */
  }

  button:hover {
    background-color: #506A99; /* Hover uchun fon rangi */
    transform: scale(1.05);
  }

  button:active {
    background-color: #305070; /* Active uchun fon rangi */
    transform: scale(0.95);
  }
`

export const Footerdiv4 = styled.div`
display: flex;
flex-direction: column;
width: 355px;
height: 260px;



h1{
  color: var(--Gray-Scale-0, #FFF);

/* H4/Medium */
font-family: Jost;
font-size: 34px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 117.647% */
letter-spacing: 0.085px;
}


`

export const Footerdiv41 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 86px;
  height: 174px;

  p {
    color: var(--Gray-Scale-0, #FFF);

    /* Body 1/Regular */
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.08px;
    transition: all 0.3s ease; 
  }

  p:hover {
    color: #80B4FF; 
    cursor: pointer; 
    transform: scale(1.05);
  }
`;
