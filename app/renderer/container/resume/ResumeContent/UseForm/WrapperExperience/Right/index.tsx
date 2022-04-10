import React from "react";
import "./index.less";
import CusScrollBox from "@common/components/CusScrollBox";

interface IProps {
    children: React.ReactNode;
}

function Right({children}: IProps){
    const getChild = () => {
        const menuElement = (children as any)[0];
        const formElement = (children as any)[1][0];

        return [
            React.cloneElement(menuElement, {
                ...(children as any)[0],
                key: 'menuElement'
            }),
            React.cloneElement(formElement, {
                ...(children as any)[0],
                key: 'formElement'
            })
        ];
    };

    return (
        <>
            <div styleName="header">
                {
                    getChild()[0]
                }
            </div>
            <div styleName="content">
                <CusScrollBox maxHeight={360}>
                    {
                        getChild()[1]
                    }
                </CusScrollBox>
            </div>
        </>
    )
}

export default Right;
