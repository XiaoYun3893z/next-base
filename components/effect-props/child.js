import { useEffect } from 'react'

export default function Child(props) {
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
