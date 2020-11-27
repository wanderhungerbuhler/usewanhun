import Head from 'next/head';
import Image from 'next/image';

import { useCallback } from 'react';

const products = [
  { name: 'Moletom WANHUN Militar', old_price: '389', price: '220' }
];

export default function Home() {

  const handleCheckout = useCallback(() => {
    const checkout = new PagarMeCheckout.Checkout({
      encryption_key: 'ek_test_FrlXXpWECO2pmk4qJykpk68jVbKuCV',
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.log(err);
      },
      close: function() {
        console.log('The modal has been closed.');
      }
    });

    checkout.open({
      amount: 5000,
      customerData: 'true',
      createToken: true,
      capture: true,
      items: [{
        id: '1',
        title: 'Ebook',
        unit_price: 1000,
        quantity: 1,
        tangible: 'false'
      }]
    });
  }, []);

  return (
    <>
      <Head>
        <title>WANHUN - Sua Cara, Sua Marca, Seu Estilo</title>
        <script src="https://assets.pagar.me/checkout/1.1.0/checkout.js" />
      </Head>
      <div>
        <h1>WANHUN - Sua Cara, Sua Marca, Seu Estilo</h1>

        <section>
          <article>
            <Image
              src="/assets/moletom-wanhun-militar.jpg"
              width={280}
              height={280}
            />
            <br />
            {products.map(product => (
              <div key={product.name}>
                <span>{product.name}</span>
                <br />
                <del>R${product.old_price}</del><br /> por <b>R${product.price}</b>
                <br />
                <button type="button" onClick={handleCheckout}>Comprar</button>
              </div>
            ))}
          </article>
        </section>
      </div>
    </>
  )
}
