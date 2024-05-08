import { useEffect, memo } from 'react'

function Child(props) {
  console.log('render', props)

  useEffect(() => {
    console.log('props有變動-1')
  })

  useEffect(() => {
    console.log('props有變動-2')
  }, [props])

  useEffect(() => {
    console.log('name有變動')
  }, [props.name])

  return (
    <>
      <h2>子女元件</h2>
      <p>name={props.name}</p>
      <p>age={props.age}</p>
    </>
  )
}

// HOC樣式，用於增強元件的一種函式樣式
const ChildMemo = memo(Child)
export default ChildMemo
