import Box from "@/styles/Box";
import { R_REQUIRED } from "@/utils/rules";
import { DownloadOutlined } from "@ant-design/icons";
import { Checkbox, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import { BsCalendarFill } from "react-icons/bs";

const MainSettings = () => {
    return (
        <div className="settings-main">
            <Box>
                <Form
                    layout="vertical"
                >
                    <Row gutter={[24, 24]}>
                        <Col lg={8}>
                            <Form.Item
                                name="clinic-name"
                                label="Clinic name"
                                rules={[R_REQUIRED]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={10}>
                            <Form.Item
                                name="start-of-working_day"
                                label="Working day"
                                rules={[R_REQUIRED]}
                            >
                                <DatePicker.RangePicker suffixIcon={<BsCalendarFill />} />
                            </Form.Item>
                        </Col>
                        <Col lg={6} >
                            <Form.Item
                                name="is-sms-active"
                                className="mt-4 ml-4"
                            >
                                <Checkbox>Is sms active?</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col lg={8}>
                            <Form.Item
                                name="logo-name"
                                label="Logo"
                                rules={[R_REQUIRED]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8}>
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
                </Form>
            </Box>
        </div>
    );
};

export default MainSettings;
