import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import './Loading.css'

function Loading({ LoaderType, addStyle, LoaderStyle }) {
  return (
    <div className="loading" style={addStyle}>
      <BallTriangle color="#e50914" style={LoaderStyle} />
    </div>
  )
}

export default Loading
