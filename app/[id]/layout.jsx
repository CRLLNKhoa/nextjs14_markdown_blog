import Sidebar from './components/sidebar'
import React from 'react'

export default function layout({ children,params: {id} }) {
  return (
    <main className="grid grid-cols-12 font-mono h-screen">
        <div className="col-span-6 col-start-3 col-end-9 overflow-y-auto">{children}</div>
        <div className="hidden lg:block col-span-2 ">
          <Sidebar id={id} />
        </div>
      </main>
  )
}
