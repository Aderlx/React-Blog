import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// antd组件
import { Card, Row, Col, Avatar, Image, Statistic, Tooltip } from "antd";

// antd图标
import { MailOutlined, GithubOutlined } from "@ant-design/icons";

// css
import "./index.less";

// http请求组件
import { useHttpRequest } from "@/utils/Request.jsx";

// 公告消息组件
import CommonMessage from "@/components/CommonMessage";

// 引入mock 测试api用
import "@/mock/home.js";

export const Profile = () => {
    const [response, error, _] = useHttpRequest({
        url: "/profile",
        method: "get",
    });

    if (error) {
        CommonMessage({ messageType: "error", content: "获取数据失败" });
    }
    // 接受 response data
    const [data, setData] = useState({});

    useEffect(() => {
        if (response) {
            setData(response.data);
        }
    }, [response]);

    // 数值统计
    const labelList = [
        {
            title: "Article",
            value: data.article_count,
            formatter: (value) => {
                return <Link to="/">{value}</Link>;
            },
        },
        {
            title: "Tag",
            value: data.tag_count,
            formatter: (value) => {
                return <Link to="/">{value}</Link>;
            },
        },
        {
            title: "Category",
            value: data.category_count,
            formatter: (value) => {
                return <Link to="/">{value}</Link>;
            },
        },
    ];
    return (
        <Card>
            <Row justify="center">
                <Avatar
                    size={120}
                    src={<Image preview={false} src={data.avatar_url} />}
                />
            </Row>

            <Row className="P-section" justify="center">
                <span>{data.paragraph}</span>

            </Row>

            <Row className="P-section" justify="space-around">
                {labelList.map((item, index) => {
                    return (
                        <Col span={4} key={index}>
                            <Statistic
                                className="P-statistic"
                                title={item.title}
                                value={item.value}
                                formatter={item.formatter}
                                valueStyle={{ textAlign: "center" }}
                            />
                        </Col>
                    );
                })}
            </Row>

            <Row className="P-section" justify="space-around">
                <Col span={6} style={{ textAlign: "center" }}>
                    <GithubOutlined
                        onClick={() => {
                            window.open(data.github);
                        }}
                    />
                </Col>
                <Col span={6} style={{ textAlign: "center" }}>
                    <Tooltip placement="left" title={data.email}>
                        <MailOutlined
                            onClick={() => {
                                window.location.href = "mailto:" +  data.email;
                            }}
                        />
                    </Tooltip>

                </Col>
            </Row>
        </Card>
    );
};
