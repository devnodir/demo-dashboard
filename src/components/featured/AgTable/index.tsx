
import { AgGridReactProps } from 'ag-grid-react';
import React, {
	useRef,
	useState
} from 'react';
import TableStyled from './Styled';


const AgTable: React.FC = () => {
	const gridRef = useRef<any>();
	const [rowData] = useState([
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
	]);
	const [columnDefs] = useState<AgGridReactProps["columnDefs"]>([
		{ headerCheckboxSelection: true, checkboxSelection: true, maxWidth: 50 },
		{ headerName: 'Make', field: 'make', suppressMovable: true },
		{ headerName: 'Model', field: 'model' },
		{
			headerName: 'Price',
			field: 'price',
			valueFormatter: (params: any) => {
				// params.value: number
				return '£' + params.value;
			},
		},
	]);


	return (
		<TableStyled
			className='ag-theme-alpine'
			ref={gridRef}
			rowData={rowData}
			columnDefs={columnDefs}
			rowSelection="multiple"
			enableCellTextSelection={false}
			suppressMovableColumns
			domLayout="autoHeight"
			defaultColDef={{
				flex: 1
			}}
		// getRowStyle={(params: any) => {
		// 	const rowIndex = params.node.rowIndex;

		// 	return {
		// 		backgroundColor: rowIndex % 2 === 0 ? "#c9daf8" : "#6d9eeb",
		// 		marginTop: rowIndex === 0 ? "0" : `${10 * rowIndex}px`,
		// 		borderRadius: "8px",
		// 		border: "none",
		// 	};
		// }}
		/>

	);
};

export default AgTable 