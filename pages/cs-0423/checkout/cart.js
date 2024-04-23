import { useState } from 'react'
import ProductList from '@/components/checkout/product-list'
import CartList from '@/components/checkout/cart-list'
import styles from '@/components/checkout/cart.module.css'
import { FaShoppingCart } from 'react-icons/fa'

export default function Cart() {
  // 加入到購物車的商品項目
  // 以其中的物件資料來比較，比product物件多了一個qty(數量)
  const [items, setItems] = useState([])

  const increaseItem = (id) => {
    // 1 2 展開每個成員
    const nextItems = items.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty+1
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      // 否則回傳原本物件
      else return v
    })
    // 3
    setItems(nextItems)
  }

  const decreaseItem = (id) => {
    // 1 2 展開每個成員
    let nextItems = items.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性qty-1
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      // 否則回傳原本物件
      else return v
    })

    // 過濾掉qty=0的item
    nextItems = nextItems.filter((v) => v.qty > 0)

    // 3
    setItems(nextItems)
  }

  const removeItem = (id) => {
    // 1 2
    const nextItems = items.filter((v, i) => {
      return v.id !== id
    })
    //3
    setItems(nextItems)
  }

  const addItem = (product) => {
    // 先尋找判斷是否已在購物車中
    const foundIndex = items.findIndex((v) => v.id === product.id)

    if (foundIndex > -1) {
      // 如果有找到 ===> 遞增數量
      increaseItem(product.id)
    } else {
      // 否則 ===> 新增商品
      // 擴充商品物件多一個qty數字屬性，預設為1
      const newItem = { ...product, qty: 1 }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }

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
          <ProductList addItem={addItem} />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList
            items={items}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
            removeItem={removeItem}
          />
        </div>
        <hr />
        <div>總數量: 123 / 總金額: 123000</div>
      </div>
    </>
  )
}
