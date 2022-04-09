import React from "react";
import "./index.less";
import CusModal from "@common/components/CusModal";
import CusInput from "@common/components/CusInput";
import {useSelector} from "react-redux";

function Personal(){
    const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
    return (
        <CusModal.Dialog title="个人信息">
            <div styleName="form">
                <div styleName="flex">
                    <div styleName="left">
                        <span styleName="require">*</span>姓名：
                    </div>
                    <div styleName="right">
                        <CusInput onChange={(e) => {}}
                            value={base?.username || ""}
                            placeholder="请输入姓名"
                            allowClear={true}/>
                    </div>
                </div>
            </div>
        </CusModal.Dialog>
    )
}

export default Personal;
