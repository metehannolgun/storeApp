import React from 'react'
import ProductList from '../components/ProductList'

function Home() {
    return (
        <ProductList /> //RouterConfig.jsx de kök dizine geldiğinde home sayfası açılsın dedik , app.jsx de olan productlist comp.'ni buraya koyduk
    )
}

export default Home