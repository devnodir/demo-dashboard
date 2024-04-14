import MyButton from "@/components/antd/MyButton";
import { COMPANY, CURRENT_COMPANY, UPLOAD_FILES } from "@/components/endpoints";
import useApi from "@/hooks/useApi";
import useT from "@/hooks/useT";
import Box from "@/styles/Box";
import { R_REQUIRED } from "@/utils/rules";
import { SaveFilled } from "@ant-design/icons";
import { Checkbox, Col, Form, Input, Row, TimePicker, Upload, message } from "antd";
import { useEffect, useState } from "react";
import { BsCalendarFill } from "react-icons/bs";
import Style from "./Style";
import dayjs from "dayjs";
import useApiMutationID from "@/hooks/useApiMutationID";
import useApiMutation from "@/hooks/useApiMutation";

const MainSettings = () => {

    const t = useT()

    const [form] = Form.useForm()
    const [files, setFiles] = useState<any[]>([])

    const { data, isLoading } = useApi(CURRENT_COMPANY)
    const record = data?.data

    const { mutate, isLoading: isUpdating } = useApiMutationID("patch", COMPANY)
    const { mutate: uploadMutate, } = useApiMutation(UPLOAD_FILES)

    useEffect(() => {
        if (record) {
            form.setFieldValue("name", record.name)
            form.setFieldValue("working_times", [dayjs(record.start_of_working_day), dayjs(record.end_of_working_day)])
            form.setFieldValue("is_sms_active", record.is_sms_active)
            form.setFieldValue("logo", record.logo)
            form.setFieldValue("is_online_form_active", record.is_online_form_active)
            setFiles([{ url: record.logo }])
        }

    }, [record])


    const uploadImage = (options: any) => {
        const { onSuccess, onError, file } = options;
        const formData = new FormData()
        formData.append("file", file)
        uploadMutate(formData, {
            onSuccess: (res) => {
                onSuccess(file);
                form.setFieldValue("logo", res.data.url)
            },
            onError: (err) => {
                const error = new Error('Error');
                onError({ event: error });
                message.error(err?.message)
            }
        })
    }

    const onSubmit = (data: any) => {
        const formData = {
            ...data,
            start_of_working_day: dayjs(data.working_times[0]).toISOString(),
            end_of_working_day: dayjs(data.working_times[1]).toISOString()
        }
        delete formData.working_times
        mutate({ id: record._id, data: formData }, {
            onError: err => {
                message.error(err?.message)
            }
        })
    }

    return (
        <Style className="settings-main">
            <Box style={{ maxWidth: 900 }} loading={isLoading}>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onSubmit}
                >
                    <Row gutter={{ xs: 12, sm: 12, md: 24 }}>
                        <Col md={12} span={24}>
                            <Form.Item
                                name="name"
                                label={t("clinic_name")}
                                rules={[R_REQUIRED]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col md={12} span={24}>
                            <Form.Item
                                name="working_times"
                                label={t("working_time")}
                                rules={[R_REQUIRED]}
                            >
                                <TimePicker.RangePicker suffixIcon={<BsCalendarFill />} format="HH:mm" />
                            </Form.Item>
                        </Col>
                        <Col md={12} span={8}>
                            <Form.Item
                                name="logo"
                                label={t("logo")}
                            >
                                <Upload
                                    maxCount={1}
                                    listType="picture-card"
                                    onChange={({ fileList }) => setFiles(fileList)}
                                    fileList={files}
                                    customRequest={uploadImage}
                                    accept="image/png, image/gif, image/jpeg"
                                >
                                    {files.length === 0 && "Upload"}
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col md={6} span={4}>
                            <Form.Item
                                name="is_sms_active"
                                valuePropName="checked"
                            >
                                <Checkbox>{t("is_sms_active")}</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col md={6} span={4}>
                            <Form.Item
                                name="is_online_form_active"
                                valuePropName="checked"
                            >
                                <Checkbox>{t("is_online_form_active")}</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                    <MyButton type="primary" className='float-right mt-4' icon={<SaveFilled />} style={{ minWidth: 150 }} loading={isUpdating} htmlType="submit">{t("save")}</MyButton>
                </Form>
            </Box>
        </Style>
    );
};

export default MainSettings;
