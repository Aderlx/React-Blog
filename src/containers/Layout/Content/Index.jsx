import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

// antd组件
import { Card, Row, Col } from 'antd'

// css
import "./index.less"

// 自定义组件
import { Profile } from './Profile';



export const ContentComponent = () => {


    return (


        <Row justify='center'  gutter={20} style={{marginLeft:"0px",marginRight:"0px"}}>
            <Col span={5} className='P-leftContent'>
                <Profile />
            </Col>

            <Col span={12} className='P-mainContent'>
                <Outlet />
            </Col>
            <Col span={5} className='P-rightContent'>
                <Card title="Default size card" >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
        </Row>
    )
}