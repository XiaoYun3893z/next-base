import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. uuid或nonaid(其它npm套件)
          //const newId = self.crypto.randomUUID()
          // 2. 時間日期物件(Date)物件轉毫秒整數值
          // `+new Date()` 或 `Date.now()`
          //const newId = Number(new Date())
          // 3. 隨機字串(hash字串)
          // const newId = (Math.random() + 1).toString(36).substring(7)
          // 4. 仿照資料表主鍵遞增id(註: 只有id為數字才可以用)
          // 提取data陣列中的id為一個新陣列
          const ids = data.map((v) => v.id)
          // 如果data陣列中無資料，則從1開始編號起
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          const newObj = { id: newId, text: 'xxx' }
          const nextData = [newObj, ...data]
          //3
          setData(nextData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          //1 2
          const nextData = data.filter((v, i) => {
            return v.text.includes('a')
          })
          //3
          setData(nextData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          //1 2
          // 過濾後剩下除了文字為b之外的物件資料 === 刪除文字為b的物件資料
          const nextData = data.filter((v, i) => {
            return v.text !== 'b'
          })
          //3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 過濾後剩下除了id為4之外的物件資料 === 刪除id為4的物件資料
          // const nextData = data.filter((v, i) => {
          //   return v.id !== 4
          // })
          // //3
          // setData(nextData)

          // 改用splice進行刪除
          // 先尋找有沒有這筆資料(id=4)
          const foundIndex = data.findIndex((v) => v.id === 4)
          // 需要判斷是否有找到
          if (foundIndex > -1) {
            // 1. 深拷貝
            const nextData = JSON.parse(JSON.stringify(data))
            // 2. 刪除公式: array.splice(deleteIndex, 1)
            nextData.splice(foundIndex, 1)
            // 3
            setData(nextData)
          }
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 用splice進行插入
          // 先尋找有沒有這筆資料(id=2)
          const foundIndex = data.findIndex((v) => v.id === 2)
          // 需要判斷是否有找到
          if (foundIndex > -1) {
            // 要加入的物件
            const newObj = { id: 5, text: 'bbb' }
            // 1. 深拷貝
            const nextData = JSON.parse(JSON.stringify(data))
            // 2. 插入公式:
            // 插入前面 array.splice(insertIndex, 0, value)
            // 插入後面 array.splice(insertIndex+1, 0, value)
            nextData.splice(foundIndex + 1, 0, newObj)
            // 3
            setData(nextData)
          }
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 第1種: 用map展開的語法
          // 1 2 展開每個成員
          const nextData = data.map((v, i) => {
            // 如果符合條件(id=3)，回傳修改其中的屬性text
            if (v.id === 3) return { ...v, text: 'cccc' }
            // 否則回傳原本物件
            else return v
          })
          // 3
          setData(nextData)

          // 第2種: 用深拷貝的語法
          // 先尋找有沒有這筆資料(id=3)
          // const foundIndex = data.findIndex((v) => v.id === 3)
          // // 需要判斷是否有找到
          // if (foundIndex > -1) {
          //   // 深拷貝語法
          //   // 1
          //   const nextData = JSON.parse(JSON.stringify(data))
          //   // 2
          //   nextData[foundIndex].text = 'cccc'
          //   // 3
          //   setData(nextData)
          // }
        }}
      >
        9. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        10. 清空表格
      </button>
    </>
  )
}
