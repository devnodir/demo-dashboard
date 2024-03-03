import { LABS, TASKS } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import React, { Fragment, useState } from 'react';
import useComlums from "./useColumns";
import { ISetState } from "@/types/helper.type";
import ComplateProtocol from "./ComplateProtocol";

interface Props {
	setId: ISetState<string | null>
}

const TasksTable: React.FC<Props> = ({ setId }) => {

	const [protocolId, setProtocolId] = useState<string | null>(null)

	return (
		<Fragment>
			<TableStructure
				setId={setId}
				endpoint={LABS}
				useComlums={useComlums}
				setProtocolId={setProtocolId}
				protocolId={protocolId}
			/>
			<ComplateProtocol />
		</Fragment>
	);
};

export default TasksTable;
