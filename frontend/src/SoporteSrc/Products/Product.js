//Esta es la presentación del producto
import React, { useState, useContext } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { Context } from "../context/Context"

export default function Product({ product }) {
  const context = useContext(Context)

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              Producto: {product.name} - <span className="text-muted font-weight-light">Versión: {product.version}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Id: {product.id}
            </Card.Subtitle> 
          </div>
        </div>
        <Card.Text>
          <Link to={`/soporte/${product.id}/tickets`}>
          <Button
            variant="outline-primary"
            className="my-2"
            onClick={ () => context.setProductId(product.id) }
          >
            Ver tickets
          </Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}