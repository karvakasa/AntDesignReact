import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Layout, Menu } from 'antd'

const { Footer } = Layout;

ReactDOM.render(
  <Layout className="layout">
    <Menu theme="dark" mode="horizontal" style={{display: 'flex', justifyContent: 'center'}}>
      TIETOPIIRI REACT TESTI
    </Menu>
    <br/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Footer style={{ textAlign: 'center' }}>Created by Topias Tallberg</Footer>
  </Layout>,
  document.getElementById('root')
);
