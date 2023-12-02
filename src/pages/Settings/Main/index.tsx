import MyButton from "@/components/antd/MyButton";
import Box from "@/styles/Box";
import { R_REQUIRED } from "@/utils/rules";
import { DownloadOutlined, SaveFilled } from "@ant-design/icons";
import { Checkbox, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import { BsCalendarFill } from "react-icons/bs";

const MainSettings = () => {
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
                                name="logo-name"
                                label="Image"
                                rules={[R_REQUIRED]}
                            >
                                <Dragger>
                                    <p className="ant-upload-drag-icon">
                                        <DownloadOutlined />
                                    </p>
                                    <Typography.Text>Click or drag file to this area to upload</Typography.Text>
                                </Dragger>
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
