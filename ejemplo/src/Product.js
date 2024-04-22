
import React from 'react';

function Product(prop){
    return (
        <div>
            <h2>{prop.name}</h2>
            <p>{prop.description}</p>
            <p>${prop.precio}</p>
        </div>
    );
}
export default Product;