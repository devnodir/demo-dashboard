import TableStructure from "@/components/shared/structurs/TableStructure";
import { ISetState } from "@/types/helper.type";
import React from 'react';
import useComlums from "./useColumns";
import { PATIENTS } from "@/components/endpoints";

interface Props {
	setId: ISetState<string | null>
}

const PatientsTable: React.FC<Props> = ({ setId }) => {

	return (
		<TableStructure
			useComlums={useComlums}
			setId={setId}
			endpoint={PATIENTS}
		/>
	);
};

export default PatientsTable;
