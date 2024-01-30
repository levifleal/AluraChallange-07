import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)
  return (
    <div id='error-page'>
        <h1>
            Oops!
        </h1>
        <p>
            Sorry, an unexpected error has ocurred.
        </p>
        <p>
            <i>
                {error.statustext || error.mensage}
            </i>
        </p>
    </div>
  )
}
