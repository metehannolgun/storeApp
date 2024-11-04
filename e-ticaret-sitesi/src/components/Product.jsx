import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate(); // 1)product details için bir yönlendirme tanımladık ve butona onClick ettiğimizde bizi product-details e yönlendir dedik

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price} ₺</h3>
            </div>
            <div className='flex-row'> {/* 2) id ile birlikte verdik daha sonra RouterConfig de path i ayarladık  */}
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayına Git</button>
            </div>
        </div>
    )
}

export default Product