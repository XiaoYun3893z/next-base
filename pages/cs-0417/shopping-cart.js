import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const handleIncrease = (id) => {
    // 1 2 展開每個成員
    const nextProducts = products.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性count+1
      if (v.id === id) return { ...v, count: v.count + 1 }
      // 否則回傳原本物件
      else return v
    })
    // 3
    setProducts(nextProducts)
  }

  const handleDecrease = (id) => {
    // 1 2 展開每個成員
    const nextProducts = products.map((v, i) => {
      // 如果符合條件(id=傳入id)，回傳物件要屬性count-1
      if (v.id === id) return { ...v, count: v.count - 1 }
      // 否則回傳原本物件
      else return v
    })
    // 3
    setProducts(nextProducts)
  }

  const handleRemove = (id) => {
    // 1 2
    const nextProducts = products.filter((v, i) => {
      return v.id !== id
    })
    //3
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              const nextCount = product.count - 1
              // 如果按下後會變為0的話
              if (nextCount === 0) {
                // 作移除
                handleRemove(product.id)
                // alert('至少要買1樣')
              } else {
                // 否則作遞減
                handleDecrease(product.id)
              }
            }}
          >
            –
          </button>
          <button
            onClick={() => {
              handleRemove(product.id)
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )
}
