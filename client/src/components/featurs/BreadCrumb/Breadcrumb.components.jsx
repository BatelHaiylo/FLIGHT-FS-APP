
import React from "react"
import { useLocation } from "react-router-dom"

export default function Breadcrumb({ title }) {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <span>Home / {location.pathname.split("/")[1]}</span>
      </section>
    </>
  )
};