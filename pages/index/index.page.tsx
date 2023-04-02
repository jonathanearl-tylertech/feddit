import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1 className="text-gray-700">Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
