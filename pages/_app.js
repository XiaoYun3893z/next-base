// import '@/styles/globals.css'
// next中只有_app.js可以引入全域樣式，其他頁面不行
// import '@/styles/product-table.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}