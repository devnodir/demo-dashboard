import { WAREHOUSE_CATEGORY } from "@/components/endpoints";
import TableStructure from "@/components/shared/structurs/TableStructure";
import React from 'react';
import useComlums from "./useColumns";
import { ISetState } from "@/types/helper.type";

interface Props {
	setId: ISetState<string | null>
}

const ProductTable: React.FC<Props> = ({ setId }) => {

	return (
		<TableStructure
			setId={setId}
			endpoint={WAREHOUSE_CATEGORY}
			useComlums={useComlums}
		/>
	);
};

export default ProductTable;
