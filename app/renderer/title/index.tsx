import * as React from "react";
// @ts-ignore
// import lessStyle from './index.less';
import "./index.less";
import Test from "../assets/test.jpg";

interface IProps {
    /**
     * @description 标题
     */
    text: string;
    /**
     * @description 样式
     */
    styles?: React.CSSProperties;
}

function Title({text,styles}: IProps){
    return (
        <div style={styles} styleName="title">{text}</div>
    )
}

export default Title;
