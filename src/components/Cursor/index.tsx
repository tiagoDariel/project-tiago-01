import { useEffect, useState } from "react"
import "./style.scss"
const Cursor = () => {
  const coord = { x: 0, y: 0 }
  const [circles, setCircles] = useState([])

  const cores = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261"]

  useEffect(() => {
    const cx = document.querySelectorAll(".cx")
    console.log(cx.length)

    setCircles(cx)
  }, [])

  circles.forEach((circle, index) => {
    circle.x = 0
    circle.y = 0
    circle.style.background = cores[index % cores.length]
  })

  window.addEventListener("mousemove", (e) => {
    coord.x = e.clientX
    coord.y = e.clientY
  })

  const animation = () => {
    let x = coord.x
    let y = coord.y

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + "px"
      circle.style.top = y - 12 + "px"

      circle.style.scale = (circles.length - index) / circles.length

      circle.x = x
      circle.y = y

      const nextCircle = circles[index + 1] || circles[0]
      x += (nextCircle.x - x) * 0.8
      y += (nextCircle.y - y) * 0.8
    })

    requestAnimationFrame(animation)
  }

  animation()

  return (
    <>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>

      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>

      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>

      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>

      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>

      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>

      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
      <div className="cx"></div>
    </>
  )
}

export default Cursor
