import { useEffect } from "react"


const UseTitle = (title:string) => {
useEffect(()=> {
    document.title = `${title} | Portfolio`
}, [title])

  return (
    null
  )
}

export default UseTitle
