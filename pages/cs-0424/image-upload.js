import { useState } from 'react'

export default function ImageUpload() {
  // 記錄被選中的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 預覽圖片的網址(呼叫`URL.createObjectURL`產生)
  const [previewURL, setPreviewURL] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)

    if (file) {
      // 將檔案物件設定到狀態裡
      setSelectedFile(file)
      // 產生預覽網址
      setPreviewURL(URL.createObjectURL(file))
    } else {
      // else是因為取消選擇圖片的情況等等
      setSelectedFile(null)
      // 要回設預設值或是用預設圖片
      setPreviewURL('')
    }
  }

  const handleImageUpload = async () => {
    const fd = new FormData()

    // 對照伺服器中要上傳的檔案欄位名稱
    fd.append('avatar', selectedFile)

    // 傳送到伺服器的對應路由中，自動解析為FormData格式
    const res = await fetch('http://localhost:5555/upload-avatar', {
      method: 'POST',
      body: fd,
    })

    // 獲得伺服器回傳的訊息
    const data = await res.json()

    console.log(data)
  }

  return (
    <>
      <h1>圖片上傳與預覽</h1>
      <hr />
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        <button onClick={handleImageUpload}>上傳</button>
      </div>
      <div>
        預覽:
        <img src={previewURL} alt="" />
      </div>
    </>
  )
}
