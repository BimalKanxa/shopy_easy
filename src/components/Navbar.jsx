import { styled } from "styled-components";
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive'

const Container = styled.div`
        height: 60px;
        ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${mobile({
        padding: "10px 0px"
})}
`

const Left = styled.div`
        flex:1;
        display: flex;
        align-items: center;
`

const Language = styled.span`
        font-size: 16px;
        cursor: pointer;
        ${mobile({
        display: "none"
})}
`

const Right = styled.div`
                flex:1;
                display : flex;
                align-items: center;
                justify-content: flex-end;
                ${mobile({
                        justifyContent: "center",
                        flex: 2
                })}

`
const Center = styled.div`
                        flex:1;
                        text-align : center;
`
const SearchContainer = styled.div`
                border: 0.5px solid gray;
                display: flex;
                align-items: center;
                margin-left: 2.5rem;
                padding: 5px;
                ${mobile({
                        marginLeft: "1.5rem"
                })}
`

const Input = styled.input`
                border: none;
                ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
                font-weight: bold;
                ${mobile({
        fontSize: "24px"
})}
`
const MenuItem = styled.div`
                font-size: 14px;
                cursor : pointer;
                margin-left: 2.5rem;
                ${mobile({
                        fontSize:"12px",
                        marginLeft: "1.2rem"
                })}
`

const Navbar = () => {
        return (
                <Container>
                        <Wrapper>
                                <Left>
                                        <Language>EN</Language>
                                        <SearchContainer>
                                                <Input placeholder="search" />
                                                <Search style={{ color: "gray", fontSize: 16 }} />
                                        </SearchContainer>
                                </Left>
                                <Center>
                                        <Logo>ShopZy</Logo>
                                </Center>
                                <Right>
                                        <MenuItem>Register</MenuItem>
                                        <MenuItem>Login</MenuItem>
                                        <MenuItem>
                                                <Badge badgeContent={4} color="primary">
                                                        <ShoppingCartIcon />
                                                </Badge>
                                        </MenuItem>
                                </Right>
                        </Wrapper>

                </Container>
        )
}

export default Navbar