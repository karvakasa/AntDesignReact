import { Popover, Button } from 'antd'
import  { useState } from "react"

const PopoverButton = () => {

  const [visibility, setVisibility] = useState(false)

  const hide = () => {
    setVisibility(false)
  };

  const handleVisibleChange = () => {
    setVisibility(true)
  };

  return (
    <Popover
        content={<a onClick={hide}>Close</a>}
        title="not working yet :("
        trigger="click"
        visible={visibility}
        onVisibleChange={handleVisibleChange}
      >
        <Button type="primary" shape="circle">Donate</Button>
      </Popover>
  )}

export default PopoverButton