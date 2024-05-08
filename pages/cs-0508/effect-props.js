import { useState } from 'react'
//import Child from '@/components/effect-props/child'
import ChildMemo from '@/components/effect-props/child-memo'

export default function EffectProps() {
  // 因為user狀態是物件，只要setUser必定會造成re-render
  // 子女元件一定會跟著re-render
  const [user, setUser] = useState({ name: 'Nike', age: 10 })

  // 如果狀態是一般值，因為setAge或setName一樣的情況下不會觸發re-render
  // 所以子女元件並不會造成re-render
  //   const [name, setName] = useState('Nike')
  //   const [age, setAge] = useState(10)

  return (
    <>
      <h1>Effect有關props範例</h1>
      <ChildMemo name={user.name} age={user.age} />
      {/* <Child name={name} age={age} /> */}
      <hr />
      <button
        onClick={() => {
          setUser({ ...user, age: 18 })
          //setAge(18)
        }}
      >
        age=18
      </button>
      <button
        onClick={() => {
          setUser({ ...user, name: 'Iris' })
          //setName('Iris')
        }}
      >
        name=Iris
      </button>
    </>
  )
}
