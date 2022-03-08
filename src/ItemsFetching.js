import React, { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import { List } from 'antd';

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
          <List
            bordered
            dataSource={props.data}
            renderItem={item => (
              <List.Item>
                <Link to={`/giftTarget/${item.giftTargetId}`}>
                  {item.name}
                </Link>
              </List.Item>
            )}
          />
        </ul>
      </div>
    )
}

export default ItemsFetching