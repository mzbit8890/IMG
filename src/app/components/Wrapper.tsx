import React, { FC , ReactNode} from "react"

const Wrapper:FC<{children : React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 about8:px-6 xl:px-9">
      {children}
    </div>
  )
}

export default Wrapper
