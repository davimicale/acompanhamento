import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import './styles.css';

const OrderDetailPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="order-details">
          <h1>Detalhe do pedido 12345678</h1>
          <span>Realizado em: 29/09/2024</span>
          <a href="#" className="help-link">Preciso de ajuda</a>
        </section>

        <section className="payment-info">
          <h2>Forma de pagamento</h2>
          <p>Tipo de pagamento: <strong>Pix</strong></p>
          <p>Valor total: <strong>R$ 12,23</strong></p>
          <p>Horário do pagamento: <strong>14:35</strong></p>
          <button className="print-button">Imprimir nota fiscal</button>
        </section>

        <section className="total-info">
          <h2>Total Pago</h2>
          <p>Subtotal: R$ 7,23</p>
          <p>Frete: R$ 5,00</p>
          <p><strong>Total: R$ 12,23</strong></p>
        </section>

        <section className="address-info">
          <h2>Endereço de entrega</h2>
          <p>Rua Exemplo, 123, Bairro Centro - Cidade Exemplo, Estado</p>
        </section>

        <section className="order-status">
          <h2>Status do Pedido</h2>
          <ul>
            <li>
              <i className="status-icon">📦</i>
              <span className="status-text">Pedido Recebido</span>
              <span className="status-date">29/09 - 14h34</span>
            </li>
            {/* Adicionar os outros status aqui */}
          </ul>
        </section>

        <ProductList />
        <button className="new-order-button">Realizar novo pedido</button>
      </main>
    </div>
  );
};

export default OrderDetailPage;
