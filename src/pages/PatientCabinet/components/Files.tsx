import MyButton from '@/components/antd/MyButton';
import MyTable from '@/components/antd/MyTable';
import { FILES, UPLOAD_FILE } from '@/components/endpoints';
import ActionButtons from '@/components/shared/TableComponents/ActionButtons';
import TableDate from '@/components/shared/TableComponents/TableDate';
import useApi from '@/hooks/useApi';
import useApiMutationID from '@/hooks/useApiMutationID';
import { downloadByUrl, humanFileSize, mapTableData } from '@/utils/methods';
import { colors } from '@/utils/theme';
import { Flex, Upload, message } from 'antd';
import { t } from 'i18next';
import React from 'react';
import { FaFile, FaUpload } from 'react-icons/fa6';
import Style from '../../Settings/Files/Style';
import useApiMutation from '@/hooks/useApiMutation';
import { useParams } from 'react-router-dom';

interface Props {
	data: any[],
	refetch: any
}

const Files: React.FC<Props> = ({ data, refetch }) => {

	const { id } = useParams()

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", FILES)
	const { mutate: uploadMutate, isLoading: isUploading } = useApiMutation(UPLOAD_FILE)

	const records = mapTableData(data)

	const columns = [
		{
			title: 'File name',
			dataIndex: 'name',
			render: (val: string) => <div className="d-flex align-items-center">
				<FaFile className="mr-2" />{val}
			</div>
		},
		{
			title: 'Size',
			dataIndex: 'size',
			render: (size: number) => humanFileSize(size)
		},
		{
			title: 'Created date',
			dataIndex: 'createdAt',
			render: TableDate
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id: string, record: any) => <ActionButtons
				onDownload={() => downloadByUrl(record.name, record.url)}
				onDelete={() => deleteItem(id)}
			/>
		},
	];

	const deleteItem = (id: string) => {
		mutate({ id }, {
			onSuccess: () => refetch(),
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}

	const handleChange = ({ file }: any) => {
		const formData = new FormData()
		formData.append("file", file)
		formData.append("patient_id", id || "")
		uploadMutate(formData, {
			onSuccess: () => refetch(),
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}


	return (
		<Style>
			<Flex justify="end">
				<Upload
					maxCount={1}
					showUploadList={false}
					beforeUpload={() => false}
					onChange={handleChange}
				>
					<MyButton
						type="primary"
						icon={<FaUpload />}
						color={colors.success}
						className="text-uppercase float-right"
						htmlType="button"
						loading={isUploading}
					>
						{t("upload")}
					</MyButton>
				</Upload>
			</Flex>
			<MyTable
				columns={columns}
				dataSource={records}
				loading={isDeleting}
			/>
		</Style>
	)
}

export default Files