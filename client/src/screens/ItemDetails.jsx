import React from 'react'
import Layout from '../components/shared/Layout'

function ItemDetails(props) {
  return (
    <Layout>
      <p>{props.name}</p>
    </Layout>
  )
}

export default ItemDetails
