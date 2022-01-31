import { useEffect } from 'react';
import PropTypes from 'prop-types';

// antd 组件
import { message } from 'antd';



// 全局提示组件
const CommonMessage = (props) => {

    // 接受父组件 参数
    // message 类型
    const messageType = props.messageType || "success"
    // content 内容
    const content = props.content
    // 存在时间
    const duration = props.duration || 3
    // 关闭回调函数
    const onClose = props.onClose || null


    useEffect(() => {
        message[messageType](content, duration, onClose)
    }, [])

}


// // 全局提示组件 参数
// CommonMessage.propTypes  = {
//     // message 类型
//     messageType: PropTypes.string,
//     // content 内容
//     content: PropTypes.string.isRequired,
//     // 存在时间
//     duration: PropTypes.number,
//     // 关闭回调函数
//     onClose: PropTypes.func.isRequired,
// };


// // 全局提示组件 参数默认值
// CommonMessage.defaultProps = {
//     messageType: "success",
//     duration: 3,
//     onClose: () => { },
// };


export default CommonMessage


