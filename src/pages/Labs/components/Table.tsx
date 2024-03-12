import { LABS } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import { ISetState } from "@/types/helper.type";
import React, { Fragment, useState } from 'react';
import ComplateProtocol from "./ComplateProtocol";
import useComlums from "./useColumns";

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
			{protocolId && <ComplateProtocol protocolId={protocolId} setProtocolId={setProtocolId} />}
		</Fragment>
	);
};

export default TasksTable;
