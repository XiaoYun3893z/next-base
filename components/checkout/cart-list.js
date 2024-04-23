import React from 'react'
import styles from './cart.module.css'

export default function CartList({ items = [] }) {
  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button onClick={() => {}}>+</button>
                <span>1</span>
                <button onClick={() => {}}>-</button>
              </div>
              <div>
                <button onClick={() => {}}>移除</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
