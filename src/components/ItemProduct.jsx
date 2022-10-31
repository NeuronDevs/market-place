import React, { useState } from 'react'

export const ItemProduct = ({ id, name }) => {


    return (
        <li class="nav-item">
            <a href={"modify?key="+id} class="nav-link link-dark" aria-current="page">
                {name}
            </a>
        </li>

    )
}
