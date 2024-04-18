import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 父母元件狀態(內部私有的)
  // const [pData, setPData] = useState('parent data')
  // P到C

  // 父母元件專門讓子女B回送資料的狀態
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* <ChildA pData={pData} /> */}
      {/* P到C */}
      <p>來自ChildB(子女B)的資料:{dataFromChild}</p>
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
