import React, {useState} from "react";
import "./index.less";
import {useHistory} from "react-router";
import ROUTER from "@common/constants/router";
import CusButton from "@common/components/CusButton";
import {toPrintPdf} from "@common/utils/htmlToPdf";
import {useSelector} from "react-redux";
import CusModal from "@common/components/CusModal";

function ResumeAction(){
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
    const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
    // 返回首页
    const onBack = () => history.push(ROUTER.root);

    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <CusButton size="middle" className="export-btn" onClick={() => setShowModal(true)}>导出PDF</CusButton>
            {
                showModal && (
                    <CusModal.Confirm
                        title="确定要打印简历吗？"
                        description="请确保信息正确，目前只支持单页打印"
                        config={{
                            cancelBtn: {
                                isShow: true,
                                callback: () => setShowModal(false)
                            },
                            submitBtn: {
                                isShow: true,
                                callback: () => {
                                    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
                                    setShowModal(false);
                                }
                            }
                        }}/>
                )
            }
        </div>
    )
}

export default ResumeAction;
