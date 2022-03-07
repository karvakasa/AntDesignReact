import React from "react"
import { useParams } from "react-router-dom"
import { Card } from 'antd'
import PopoverButton from "./PopoverButton"

const SingleItem = (props) => {

  const giftTargetId = useParams().id

  const findGiftTarget = props.data.find(e => {
    return e.giftTargetId === giftTargetId
  })

  return (
    <div className="site-card-border-less-wrapper">
      <Card title={findGiftTarget.name} bordered={false} style={{ width: 300 }}>
        <p>gift target id: {findGiftTarget.giftTargetId}</p>
        <p>paymentCode: {findGiftTarget.paymentCode}</p>
        <p>type: {findGiftTarget.type}</p>
        <br/>
        <br/>
        <PopoverButton />
      </Card>
    </div>
  )}

export default SingleItem