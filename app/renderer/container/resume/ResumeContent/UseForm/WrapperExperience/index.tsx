import React, {useEffect, useState, useMemo, useCallback} from "react";
import "./index.less";
import Left from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/Left";
import Right from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/Right";
import Menu from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/Right/Menu";
import {onAddExperience, onDeleteExperience} from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/utils";
import {AdapterExperienceType} from "@src/container/resume/ResumeContent/UseForm/WrapperExperience/adapter";
import CusModal from "@common/components/CusModal";


interface IProps {
    dataList: any[];
    updateDataList: (newDataList: any[]) => void;
    children: React.ReactNode;
}

function WrapperExperience({children, dataList, updateDataList}: IProps){
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentItem, setCurrentItem] = useState<AdapterExperienceType>({});
    const [experienceList, setExperienceList] = useState<AdapterExperienceType[]>([]);

    // 删除状态
    const [deleteModal, setDeleteModal] = useState({
        show: false,
        deleteIndex: -1
    })
    // 编辑状态
    const [editModal, setEditModal] = useState({
        showByCancel: false, // 编辑下的取消弹窗
        showBySave: false, // 编辑下的保存弹窗
        status: false, // 编辑的状态
        tempSaveItem: {}, // 暂时保存的数据
        onAfterFn: () => {} // 操作之后的执行方法
    })

    // 初始条目不为空，默认选中第一条
    useEffect(() => {
        if(dataList && dataList?.length > 0) {
            setCurrentIndex(0);
        }
    }, []);

    // 当条目数据列表修改更新，更新数据
    useEffect(() => {
        if(dataList && dataList?.length > 0) {
            setExperienceList(dataList || []);
        } else {
            setExperienceList([]);
        }
    }, [dataList]);

    // 当条目索引发生变化，更新当前选中的条目数据
    useEffect(() => {
        if(currentIndex >= 0) {
            setCurrentItem(experienceList[currentIndex]);
        }
    }, [currentIndex, experienceList]);

    // 删除条目
    const onDeleteItem = (index: number) => {
        setDeleteModal({
            show: true,
            deleteIndex: index
        });
    };

    const onDeleteCancel = useCallback(() => {
        setDeleteModal({
            show: false,
            deleteIndex: -1
        })
    }, [currentIndex, deleteModal]);

    const onDeleteOk = useCallback(() => {
        const newList = onDeleteExperience(deleteModal.deleteIndex, experienceList);
        if(newList.length > 0) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(-1);
        }

        setDeleteModal({
            show: false,
            deleteIndex: -1
        })
        setExperienceList(newList);
        updateDataList && updateDataList(newList);
    }, [currentIndex, deleteModal]);

    // 修改选中的条目
    const onChangeItem = useCallback(((index: number) => {
        // 当前正在编辑状态
        if(editModal.status){
            onToggleEditModal({
                showByCancel: true,
                onAfterFn: () => {
                    setCurrentIndex(index);
                }
            })
        } else {
            setCurrentIndex(index);
        }
    }), [editModal]);

    // 添加条目
    const onAddItem = () => {
        if(editModal.status){
            onToggleEditModal({
                showByCancel: true,
                onAfterFn: () => {
                    const newList = onAddExperience(experienceList);
                    if(newList.length > 0){
                        // 定位激活刚添加的数据
                        setCurrentIndex(0);
                        setExperienceList(newList);
                        updateDataList && updateDataList(newList);
                    }
                }
            })
        } else {
            const newList = onAddExperience(experienceList);
            if(newList.length > 0){
                // 定位激活刚添加数据
                setCurrentIndex(0);
                setExperienceList(newList);
                updateDataList && updateDataList(newList);
            }
        }
    }

    // 修改编辑状态
    const onToggleEditModal = useCallback((config) => {
        setEditModal((prev) => {
            return {
                ...prev,
                ...config
            };
        })
    }, [editModal]);

    const onSaveEditValue = useCallback(() => {
        let newList = [...experienceList];
        let item = editModal?.tempSaveItem ? {...editModal?.tempSaveItem} : {...currentItem};
        newList[currentIndex] = item;
        setExperienceList(newList);
        updateDataList && updateDataList(newList);
        onToggleEditModal({
            status: false
        });
    }, [editModal?.tempSaveItem, currentIndex, onToggleEditModal]);

    const onChangeCurrentItem = useCallback((newItem: AdapterExperienceType) => {
        onToggleEditModal({
            tempSaveItem: {...newItem}
        })
    }, [children, onToggleEditModal]);

    const newForm = useMemo(() => {
        return React.Children.map(children, (child) => {
            if(React.isValidElement(child)){
                // 给子组件注入两个属性：当前条目与修改当前条目的方法
                return React.cloneElement(child, {
                    isDisable: !editModal?.status,
                    currentItem: currentItem,
                    onChangeCurrentItem: onChangeCurrentItem
                })
            }
            return child;
        })
    }, [children, currentItem, editModal?.status, onChangeCurrentItem]);

    return <div styleName="form">
        <div styleName="left-box">
            <Left index={currentIndex}
                experienceList={experienceList}
                onAdd={onAddItem}
                onChange={onChangeItem}
                onDelete={onDeleteItem}/>
        </div>
        <div styleName="right-box">
            {
                experienceList.length > 0 && (
                    <Right>
                        <Menu isEdit={editModal?.status}
                            currentItem={currentItem}
                            onChangeEditStatus={() => onToggleEditModal({
                                status: true,
                                tempSaveItem: {...currentItem}
                            })}
                            onCancelEditValue={() => onToggleEditModal({
                                showByCancel: true
                            })}
                            onSaveEditValue={onSaveEditValue}/>
                        {newForm}
                    </Right>
                )
            }
        </div>
        {
            deleteModal.show && (
                <CusModal.Confirm
                    title="确定删除条目吗？"
                    description="删除后无法恢复"
                    config={{
                        cancelBtn: {
                            isShow: true,
                            callback: onDeleteCancel
                        },
                        submitBtn: {
                            isShow: true,
                            callback: onDeleteOk
                        }
                    }}/>
            )
        }
        {
            editModal.showByCancel && (
                <CusModal.Confirm
                    title="确定放弃编辑的内容？"
                    description="放弃后将无法恢复"
                    config={{
                        cancelBtn: {
                            isShow: true,
                            callback: () => {
                                onToggleEditModal({
                                    showByCancel: false
                                })
                            }
                        },
                        submitBtn: {
                            isShow: true,
                            callback: () => {
                                onToggleEditModal({
                                    status: false,
                                    showByCancel: false,
                                    tempSaveItem: {}
                                });
                                editModal?.onAfterFn && editModal?.onAfterFn();
                                setCurrentItem(experienceList[currentIndex]);
                            }
                        }
                    }}/>
            )
        }
    </div>
}

export default WrapperExperience;
