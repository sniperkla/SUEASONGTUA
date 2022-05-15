import { useEffect, useRef, useState } from 'react'
export const slideShow = () => {
  var [indexs, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const delay = 3000
  const colors = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg'
  ]

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }
  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )
    return () => {
      resetTimeout()
    }
  }, [indexs])

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-indexs * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index}>
            <img src={backgroundColor}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${indexs === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
