// import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";
import { useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";
import { useState } from "react";



const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({
       padding: "10px"
    })}

`;

const Title = styled.h2`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border: ${props => props.type === "filled" && "none"};
        background-color: ${props => props.type === "filled" ? "black" : "transparent"};
        color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({
       display: "none"
    })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`

const Bottom = styled.div`
        display: flex;
        justify-content: space-between;

        ${mobile({
       flexDirection: "column"
    })}
`;

const Info = styled.div`
        flex: 3;
`;

const Product = styled.div`
        display: flex;
        justify-content: space-between;
        ${mobile({
       flexDirection: "column"
    })}
`


const ProductDetail = styled.div`
        flex: 2;
        display: flex;

`

const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`                 
const ProductName = styled.span``
const ProductId = styled.span``

const ProductColor = styled.span`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
`
const ProductAmount = styled.div`
        font-size: 24px;
        margin: 5px;

        ${mobile({
       margin:"5px 15px"
    })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({
       marginBottom: "20px"
    })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`


const Summary = styled.div`
        flex: 1;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 70vh;
`;

const SummaryTitle = styled.h2`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type==="total" && "500"};
    font-size: ${props => props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    font-weight: 600;
    color: white;
`



const Cart = () => {
    const amount = useSelector(state => state.value)
    const dispatch =  useDispatch()
    const {IncrementCart, DecrementCart} = bindActionCreators(actionCreators, dispatch);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now!</TopButton>
                </Top>
                <Bottom>

                    <Info>
                    <Product>
                            <ProductDetail>
                                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                                <Details>
                                    
                                    <ProductName><b>Product: </b> Tshirt</ProductName>
                                    <ProductId><b>ID: </b> UDHSJW332432</ProductId>
                                    <ProductColor color="black"></ProductColor>
                                    <ProductSize> <b>Size: </b>  S  </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer >
                                    <RemoveIcon onClick={()=>{DecrementCart(10);setCount(count-1)}} />
                                    <ProductAmount>{count}</ProductAmount>
                                    <AddIcon onClick={()=>{IncrementCart(10);setCount(count+1)}} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 10</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" />
                                <Details>

                                    <ProductName><b>Product: </b> Tshirt</ProductName>
                                    <ProductId><b>ID: </b> UDHSJW324432</ProductId>
                                    <ProductColor color="blue"></ProductColor>
                                    <ProductSize> <b>Size: </b>  41  </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon onClick={()=>{DecrementCart(20); setCount1(count1 -1)}} />
                                    <ProductAmount>{count1}</ProductAmount>
                                    <AddIcon onClick={()=>{IncrementCart(20); setCount1(count1 +1)}} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>$ {amount}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping: </SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount: </SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem  type="total">
                            <SummaryItemText><b>Total: </b> </SummaryItemText>
                            {/* <SummaryItemPrice>$ 70</SummaryItemPrice> */}
                            <SummaryItemPrice>$ {amount}</SummaryItemPrice>
                        </SummaryItem>

                                <Button>CHECKOUT NOW!</Button>

                    </Summary>

                </Bottom>
            </Wrapper>

            <Footer />
        </Container>
    );
};

export default Cart;