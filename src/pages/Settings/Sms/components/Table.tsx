import { SMS_TEMPLATES } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import { ISetState } from "@/types/helper.type";
import React from 'react';
import useComlums from "./useColumns";

interface Props {
	setId: ISetState<string | null>
}

const SMSTable: React.FC<Props> = ({ setId }) => {

	return (
		<TableStructure
			setId={setId}
			endpoint={SMS_TEMPLATES}
			useComlums={useComlums}
		/>
	);
};

export default SMSTable;
