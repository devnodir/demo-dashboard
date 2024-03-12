import { BONUS } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import { ISetState } from "@/types/helper.type";
import React from 'react';
import useComlums from "./useColumns";

interface Props {
	setId: ISetState<string | null>
}

const BonusTable: React.FC<Props> = ({ setId }) => {

	return (
		<TableStructure
			setId={setId}
			endpoint={BONUS}
			useComlums={useComlums}
		/>
	);
};

export default BonusTable;
