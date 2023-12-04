import MyButton from "@/components/antd/MyButton";
import useT from "@/hooks/useT";
import Box from "@/styles/Box";
import { R_REQUIRED } from "@/utils/rules";
import { SaveFilled } from "@ant-design/icons";
import { Checkbox, Col, DatePicker, Form, Input, Row, Upload } from "antd";
import { useState } from "react";
import { BsCalendarFill } from "react-icons/bs";

const MainSettings = () => {
    const t = useT()
    const [files, setFiles] = useState<any[]>([])
    return (
        <div className="settings-main">
            <Box style={{ maxWidth: 900 }}>
                <Form
                    layout="vertical"
                >
                    <Row gutter={[24, 24]}>
                        <Col lg={12}>
                            <Form.Item
                                name="clinic-name"
                                label="Clinic name"
                                rules={[R_REQUIRED]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item
                                name="start-of-working_day"
                                label="Working day"
                                rules={[R_REQUIRED]}
                            >
                                <DatePicker.RangePicker suffixIcon={<BsCalendarFill />} />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item
                                name="logo-name"
                                label="Logo"
                                rules={[R_REQUIRED]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="is-sms-active"
                            >
                                <Checkbox>Is sms active?</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item
                                name="logo-icon"
                                label="Image"
                                rules={[R_REQUIRED]}
                            >
                                <Upload
                                    maxCount={1}
                                    listType="picture-card"
                                    openFileDialogOnClick
                                    onChange={({ fileList }) => setFiles(fileList)}
                                >
                                    {files.length === 0 && "Upload"}
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                    <MyButton type="primary" className='float-right mt-4' icon={<SaveFilled />} style={{ minWidth: 150 }}>SAVE</MyButton>
                </Form>
            </Box>
        </div>
    );
};

export default MainSettings;
