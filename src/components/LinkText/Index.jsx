import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// antd 组件
import { Button } from 'antd';


// 文字按钮组件
export const LinkText = (props) => {
    // 接受父组件 参数
    const { text, href, color } = props

    // 构造style
    const style = {
        color: color
    }

    return (
        <Button type="link" href={href} style={style}>{text}</Button>
    )
}

// 文字按钮组件 参数
LinkText.propTypes = {
    // Text 内容
    text: PropTypes.string.isRequired,
    // 跳转url
    href: PropTypes.string,
    // 按钮颜色
    color: PropTypes.string,
};

// 文字按钮组件 参数默认值
LinkText.defaultProps = {
    href: "#",
    color: "black",
};
