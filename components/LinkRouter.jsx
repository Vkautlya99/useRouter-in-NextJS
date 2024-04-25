"use client"
import { useRouter } from "next/navigation"
const LinkRouter = () => {
    const router = useRouter()
    // console.log("Router",router)
  return (
    <>
          {/* <h1>This is UseRouter page learning</h1> */}
          <button type='button' onClick={() => {                           // Here in useRouter we use Push method to route on another page
              router.push("/Products")
          }}>Go to Python Courses or Product page</button>
    </>
  )
}

export default LinkRouter
