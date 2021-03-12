import React from 'react'

function ChevronIcon({fill = false, rotation = '0deg', size = 16}) {
  return (
    <div
      style={{
        transform: `rotate(${rotation})`,
        // transition: `transform var(--animation-time)`
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{
          verticalAlign: 'middle',
        }}>
        <g fill="none" fillRule="nonzero">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill={fill || '#404040'}
            d="M15.707 4.707L8.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414z"
          />
        </g>
      </svg>
    </div>
  )
}
export default ChevronIcon
