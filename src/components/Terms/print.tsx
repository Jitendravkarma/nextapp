"use client"
import React, { memo } from 'react'
import { FaPrint } from 'react-icons/fa'

const Print = () => {
  const printWindow = ()=>{
    window.print();
  }
  return (
    <button
      title="Print this page"
      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
      onClick={printWindow}
    >
      <FaPrint/>
    </button>
  )
}

export default memo(Print)