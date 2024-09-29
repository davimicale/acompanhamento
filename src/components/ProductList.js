import React from 'react';
import './styles.css';

const ProductList = () => {
  return (
    <section className="order-items">
      <h2>Itens do Pedido</h2>
      <div className="item">
        <img src="./imagens/maca.png" alt="Maçã Orgânica" />
        <div className="item-info">
          <p className="item-name">Maçã Orgânica</p>
          <p className="item-details">2 unidades - R$ 3,89</p>
        </div>
      </div>
      <div className="item">
        <img src="./imagens/cenoura.png" alt="Cenoura Não Orgânica" />
        <div className="item-info">
          <p className="item-name">Cenoura Não Orgânica</p>
          <p className="item-details">3 unidades - R$ 3,34</p>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
