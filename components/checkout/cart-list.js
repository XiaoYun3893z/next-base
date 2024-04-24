import React from 'react'
import styles from './cart.module.css'

import { useCart } from '@/hooks/use-cart'

export default function CartList() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart()

  return (
    <>
      <ul className={styles['list']}>
        <li className={styles['item']}>
          <div className={styles['w-400']}>名稱</div>
          <div>價格</div>
          <div>數量</div>
          {/* 明天從小計功能解說起 */}
          <div>小計</div>
          <div></div>
        </li>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    increaseItem(v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    decreaseItem(v.id)
                  }}
                >
                  -
                </button>
              </div>
              <div>{v.subTotal}</div>
              <div>
                <button
                  onClick={() => {
                    removeItem(v.id)
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
