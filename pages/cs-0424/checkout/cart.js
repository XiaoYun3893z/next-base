import CartList from '@/components/checkout/cart-list'
import styles from '@/components/checkout/cart.module.css'
import Navbar from '@/components/checkout/navbar'
import { useCart } from '@/hooks/use-cart'

import Link from 'next/link'

export default function Cart() {
  const { totalPrice, totalQty } = useCart()

  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h3>購物車</h3>
        <hr />
        <Link href="/cs-0424/checkout/product">連至 商品頁</Link>
        <div className={styles['cart']}>
          <CartList />
        </div>
        <hr />
        <div>
          總數量: {totalQty} / 總金額: {totalPrice}
        </div>
      </div>
    </>
  )
}
