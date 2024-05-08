import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EffectPattern() {
  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState({ count: 0 })

  // 樣式3: 首次渲染(render)之後(after)執行一次。之後當相依變數有更動之後(after)，又會執行一次
  // 說明: 近似於生命周期方法中的componentDidMount(didMount) + componentDidUpdate(didUpdate)
  // 使用情況: 開發應用時常用到的樣式。狀態更動是異步的解決方案之一。不同狀態的連鎖變動(A->B->C)。當不同的資料要套用同個元件時。
  useEffect(() => {
    console.log(
      '首次渲染(render)之後(after)執行一次。之後當相依變數有更動之後(after)，又會執行一次'
    )
  }, [total, total2.count])
  //         ^^^^^^^^^^^^^ total2.count因為只有count屬性變動才會觸發
  // ^^^^^^^ total加入到相依變數陣列中，類似要監聽total狀態的更動(change)事件
  // 決定要不要執行useEffect，是由相依變數陣列中的變數是否有更動而定，使用的是Object.is比較(===)
  // 這種方式稱為參照相等性(Reference Equality)原則，只有參照改變時才會觸發

  // 注意: 因為useEffect與render有絕對關係，能加入到相依變數陣列中的變數，必然要和re-render(update)有關
  // 因此只有props與state(或兩者衍生的變數)才能加入到相依性陣列

  return (
    <>
      <h1>Effect使用4種樣式範例</h1>
      <hr />
      <div title="total">
        <h1>{total}</h1>
        <button
          onClick={() => {
            setTotal(total + 1)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setTotal(100)
          }}
        >
          =100
        </button>
      </div>
      <div title="total2">
        <h1>{total2.count}</h1>
        <button
          onClick={() => {
            setTotal2({ count: total2.count + 1 })
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            // 不管怎麼樣都會觸發re-render
            setTotal2({ count: 100 })
          }}
        >
          =100
        </button>
      </div>
    </>
  )
}
