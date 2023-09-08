import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
        width: 100%;
        height : 100vh;
        display : flex;
        /* background-color: orange; */
        position: relative;
        overflow: hidden;
        ${mobile({
                        display: "none"
                })}
        
        
`
const MobileContainer = styled.div`
        width: 100%;
        height : 100%;
        display : none;
        /* background-color: orange; */
        position: relative;
        overflow: hidden;
        
        ${mobile({
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "center"
                })}      
        
`

const Arrow = styled.div`
    width : 50px;
    height: 50px;
    background-color: wheat;
    border-radius : 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top : 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right:  ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`
const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transform: translateX(${props => props.slideIndex * -100}vw);
        transition: all .5s ease;
        ${mobile({
    display: "flex",
    flexDirection: "column"
})}
`

const Slide = styled.div`
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: ${props => props.bg};
        ${mobile({
    width: "100%"
})}

`
const ImgContainer = styled.div`
        flex: 1;
        height: 100%;
`

const Image = styled.img`
    height: 80%;
`


const InfoContainer = styled.div`
            flex: 1;
            padding: 50px;
`
const Title = styled.h1`
        font-size: 70px;
        ${mobile({
    fontSize: "40px"
})}
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({
    fontSize: "16px",
    margin: "20px 0px"
})}
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    ${mobile({
    fontSize: "16px"
})}
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <div>
            <Container>

                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftIcon />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {/* <Wrapper> */}
                    {sliderItems.map((item) => (

                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>Shop Now</Button>
                            </InfoContainer>
                        </Slide>

                    ))}

                </Wrapper>

                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightIcon />
                </Arrow>

            </Container>


            <MobileContainer>
                <Wrapper>

                <InfoContainer>
                                <Title>The Sale!!</Title>
                                <Desc>Get Flat upto 50% off on select Products. The best deals await you...</Desc>
                                <Button>Shop Now</Button>
                            </InfoContainer>   

                </Wrapper>

            </MobileContainer>
        </div>
    )
}

export default Slider