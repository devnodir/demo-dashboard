import TableStructure from "@/components/shared/structurs/TableStructure";
import React from 'react';
import useComlums from "./useColumns";
import { FINANCES } from "@/components/endpoints";
import { ISetState } from "@/types/helper.type";

interface Props {
	setId: ISetState<string | null>
}

const FinanceTable: React.FC<Props> = ({ setId }) => {

	return <TableStructure
		setId={setId}
		endpoint={FINANCES}
		useComlums={useComlums}
	/>
};

export default FinanceTable;
