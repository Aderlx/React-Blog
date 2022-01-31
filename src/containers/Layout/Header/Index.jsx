import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// antd组件
import { Row, Col } from 'antd'

// css
import "./index.less"

// 自定义组件

export const HeaderComponent = () => {

    return (
            <Row justify="end">
                <Col span={2}>
                    <Link className='P-Header-Link' to='/'>Home</Link>
                </Col>
                <Col span={2}>
                    <Link className='P-Header-Link' to='/archive'>Archive</Link>
                </Col>
                <Col span={2}>
                    <Link className='P-Header-Link' to='/'>Category</Link>
                </Col>
                <Col span={2}>
                    <Link className='P-Header-Link' to='/'>Tag</Link>
                </Col>
                <Col span={2}>
                    <Link className='P-Header-Link' to='/about'>About</Link>
                </Col>
            </Row>
    )
}