import styled from "styled-components"
import PropTypes from 'prop-types'
import { mobile } from "../responsive"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width : 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({
        height:"50vh"
    })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`



const CategoryItem = ({item}) => {
    // console.log(item)
  return (
    <Container>
       <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

CategoryItem.propTypes = {
    item: PropTypes.object
}
  

export default CategoryItem