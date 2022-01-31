import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// 映入 antd 组件库 Layout
import { Layout } from 'antd';

// 引入 Header
import { HeaderComponent } from './Header';
// 引入 Content
import {ContentComponent} from './Content';

// 引入 less
import './index.less'


export const LayoutComponent = () =>{
    return (
        
        <Layout className='P-Layout'>
      <Layout.Header className='P-Header'>
          <HeaderComponent />
      </Layout.Header>
      <Layout.Content className='P-Content'>
          <Outlet />
      </Layout.Content>
      {/* <Layout.Footer className='P-Content'>Footer</Layout.Footer> */}
        </Layout>
    )
}