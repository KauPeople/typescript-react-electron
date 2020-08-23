import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const ProductEditPage = (props: RouteComponentProps) => {
  const { history } = props
  return (
    <>
      <Layout history={history}>hello</Layout>
    </>
  )
}

export default ProductEditPage
