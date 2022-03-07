import React, { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

function ItemsFetching(props) {

    useEffect(() => {
        axios.get('https://test.tpfons.fi/tpdemo/ext/back/api/v1-0000/donation/targets')
        .then(res => {
            props.setData(res.data.giftTargets)
        })
        .catch(error => {
            console.log(error)
        })
    })
    return (
        <div>
            <ul>
                {props.data.map(data => (
                    <li key={data.giftTargetId}>
                         <Link to={`/giftTarget/${data.giftTargetId}`}>{data.name} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemsFetching