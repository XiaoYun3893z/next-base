export default function InputId() {
  return (
    // 使用id失去了可重複利用性
    <>
      <h2>input使用id</h2>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          alert(document.getElementById('my-input').value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
