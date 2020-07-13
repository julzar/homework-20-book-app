import React from 'react'
import { Button } from 'reactstrap'
import API from '../utils/API'

export default function Book({ title, authors, synopsis, image, link, googleId, id}) {

    function save() {
        alert('saved!')
        API.saveBook({ title, authors, synopsis, image, link, googleId })
    }

    return (
        <div className="mb-4">
            <img src={image} alt={`${title} cover`}/>
            <h2>{title}</h2>
            <p>{authors}</p>
            <p>{synopsis}</p>
            <a href={link} style={{color: "grey"}} target="_blank" rel="noopener noreferrer">View on Google Books</a>
            <Button className="btn-sm btn-light btn-outline-secondary ml-4" onClick={save}>Save</Button>
            <div className="border-bottom mt-2 mb-2"/>
        </div>
    )
}