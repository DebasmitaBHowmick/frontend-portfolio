import { useEffect } from "react"


const UseTitle = (title) => {
useEffect(()=> {
    document.title = `${title} | Portfolio`
}, [title])

  return (
    null
  )
}

export default UseTitle
