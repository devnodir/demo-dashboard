import { WAREHOUSE_SELLS } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import { ISetState } from "@/types/helper.type";
import React from 'react';
import useComlums from "./useColumns";

interface Props {
	setId: ISetState<string | null>
}

const ProductTable: React.FC<Props> = ({ setId }) => {

	return (
		<TableStructure
			setId={setId}
			endpoint={WAREHOUSE_SELLS}
			useComlums={useComlums}
		/>
	);
};

export default ProductTable;
