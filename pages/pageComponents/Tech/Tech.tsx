import React from 'react'
import SectionTitle from '../../generalComponents/SectionTitle/SectionTitle'
import Technology from './Technology'

function Tech() {
  return (
    <section>
        <SectionTitle title="Tech" />

        <ul style={{ display: "flex", flexWrap: "wrap" }}>
        <Technology text="Html" />
        <Technology text="Css" />
        <Technology text="React" />
        <Technology text="Next.js" />
        <Technology text="Ghost CMS" />
        <Technology text=".NET Core" />
        <Technology text="Node.js" />
        <Technology text="Html" />
        </ul>
    </section>
  )
}

export default Tech
