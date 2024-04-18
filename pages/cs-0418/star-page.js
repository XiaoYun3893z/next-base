import React from 'react'
import Star from '@/components/star'

export default function StarPage() {
  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      {/* 對照組: 完全沒有屬性的元件 */}
      <Star />
      <hr />
      <Star initRating={3} />
      <hr />
      <Star initRating={5} maxCount={8} />
    </>
  )
}
