import React, { useState, useEffect } from 'react';

// antd组件
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom';

// http请求组件
import { useHttpRequest } from "@/utils/Requests";

// 公告消息组件
import CommonMessage from "@/components/CommonMessage";

import { CardTitle } from './CardTitle/Index';
// css
import "./index.less"

const { Meta } = Card;


export const BlogList = () => {

    const [response, error, _] = useHttpRequest({
        url: "/blogs",
        method: "get",
    });

    if (error) {
        CommonMessage({ messageType: "error", content: "获取数据失败" });
    }
    // 接受 response data
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response) {
            setData(response.data);
        }
    }, [response]);
    console.log(data)
    return (
        data.map((item, index) => {
            return (
                <Card key={index} className="P-cardBlogs" >    
                 <Meta
                title={<CardTitle  {...item} />} />
              </Card>
            )
        })
    ) 

}