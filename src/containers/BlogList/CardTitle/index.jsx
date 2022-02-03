import { Divider, Space } from 'antd'
import { Link } from "react-router-dom"
import { FieldTimeOutlined, TagsOutlined, BookOutlined } from "@ant-design/icons";


import './index.less'


export const CardTitle = (props) => {
    const { title, createdDate, categorys, tags } = props

    return (
        <div>
            <div>
                <Link className="P-blogTitle" to={"/test"}>{title}</Link>
            </div>

            <div className="P-blogTitleLabel">

                <span className="P-blogTitleLabel">
                    <Space>
                        <FieldTimeOutlined />Release time {createdDate}
                    </Space>
                </span>
                <Divider type="vertical" />
                <Space>

                    <BookOutlined />
                    {
                        categorys.map((item, index) => {
                            return (
                                <Link className="P-blogTitleLabel" key={item.id} to={"/"}>{item.name}</Link>
                            )
                        })
                    }
                </Space>

                <Divider type="vertical" />
                <Space>

                    <TagsOutlined />
                    {
                        tags.map((item, index) => {
                            return (
                                <Link className="P-blogTitleLabel" key={item.id} to={"/"}>{item.name}</Link>
                            )
                        })
                    }
                </Space>

                <Divider />

            </div>
        </div>
    )


}