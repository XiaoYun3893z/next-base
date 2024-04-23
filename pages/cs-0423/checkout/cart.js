import { useState } from 'react'
import ProductList from '@/components/checkout/product-list'
import CartList from '@/components/checkout/cart-list'
import styles from '@/components/checkout/cart.module.css'
import { FaShoppingCart } from 'react-icons/fa'

const sampleItems = [
  {
    id: 1,
    sn: '09fdab8a-6185-4484-8bea-c47d85647d8b',
    name: 'Modern Frozen Salad - PUMA 慢跑鞋',
    photos: 't5.jpg,t4.jpg,t1.jpg',
    stock: 90,
    price: 1600,
    info: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    brand_id: 3,
    cat_id: 9,
    color: '2,3,4,1',
    tag: '2,1',
    size: '3,4,1,2',
    qty: 1,
  },
  {
    id: 2,
    sn: 'da94bfac-49e7-490e-b02b-7412e5942d0c',
    name: 'Ergonomic Granite Bike - New Balance 長袖上衣',
    photos: 't4.jpg,t5.jpg,t1.jpg',
    stock: 20,
    price: 6900,
    info: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    brand_id: 4,
    cat_id: 6,
    color: '1,4,3,2',
    tag: '2',
    size: '3',
    qty: 1,
  },
]

export default function Cart() {
  // 加入到購物車的商品項目
  // 以其中的物件資料來比較，比product物件多了一個qty(數量)
  const [items, setItems] = useState(sampleItems)

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['navbar']}>
          <div className={styles['logo']}>網站Logo</div>
          <div className={styles['header']}>
            <h2>購物車範例</h2>
          </div>
          <div className={styles['badge']}>
            <div className={styles['button']}>
              <FaShoppingCart />
              <span className={styles['button__badge']}>4</span>
            </div>
          </div>
        </div>
        <h3>商品列表</h3>
        <div className={styles['product']}>
          <ProductList />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList items={items} />
        </div>
        <hr />
        <div>總數量: 123 / 總金額: 123000</div>
      </div>
    </>
  )
}
