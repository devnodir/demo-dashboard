import { LABS, TASKS } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import React from 'react';
import useComlums from "./useColumns";
import { ISetState } from "@/types/helper.type";

interface Props {
	setId: ISetState<string | null>
}

const TasksTable: React.FC<Props> = ({ setId }) => {

	return (
		<TableStructure
			setId={setId}
			endpoint={LABS}
			useComlums={useComlums}
		/>
	);
};

export default TasksTable;
