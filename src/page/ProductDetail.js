import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container,Row,Col,Dropdown,Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let{id} = useParams()
  const [product,setProduct] = useState(null)
  const getProductDetail = async()=>{
    let url = `my-json-server.typicode.com/yeji65/hnm/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }
  useEffect(()=>{
  getProductDetail()
  },[])
  return (
    <Container>
        <Row>
          <Col className="product-img">
          <img src={product?.img} />
          </Col>
          <Col>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">₩{product?.price}</div>
            <div className="choice">{product.choice ? "Conscious choice" : ""}</div>
            
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dar" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div>
            <Button variant="dark" className="add-button">추가</Button>{' '}
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail