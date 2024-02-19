import TableStructure from "@/components/shared/structurs/TableStructure";
import React from 'react';
import useComlums from "./useColumns";
import { ISetState } from "@/types/helper.type";
import { APPOINTMENTS } from "@/components/endpoints";

interface Props {
	setId: ISetState<string | null>
}

const AppointmentsTable: React.FC<Props> = ({ setId }) => {


	return (
		<TableStructure
			setId={setId}
			useComlums={useComlums}
			endpoint={APPOINTMENTS}
		/>
	);
};

export default AppointmentsTable;
