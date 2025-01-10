import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleOrderConfirmation = () => {
    // Logique pour traiter la commande ici
    setShowConfirmation(false);
    setShowSuccess(true); // Affiche la pop-up de succès
  };

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'Votre'} text2={'Panier'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => setShowConfirmation(true)} className='bg-black text-white text-sm my-8 px-8 py-3'>PASSER VOTRE COMMANDE</button>
          </div>
        </div>
      </div>

      {/* Pop-up de confirmation */}
      {showConfirmation && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded text-center'>
            <h2 className='m-1'>Confirmer votre commande</h2>
            <p className='m-1'>Êtes-vous sûr de vouloir passer votre commande ?</p>
            <button onClick={handleOrderConfirmation} className='bg-black text-white px-4 py-2 m-1 border-2 border-black'>Confirmer</button>
            <button onClick={() => setShowConfirmation(false)} className='border-2 text-black border-black px-4 py-2 ml-2 m-1'>Annuler</button>
          </div>
        </div>
      )}

      {/* Pop-up de succès */}
      {showSuccess && (
        <div className ='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded text-center'>
            <h2 className='m-1'>Commande confirmée avec succès !</h2>
            <p className='m-1'>Votre commande a été traitée avec succès.</p>
            <button onClick={() => setShowSuccess(false)} className='bg-black text-white px-4 py-2 m-1 border-2 border-black'>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;