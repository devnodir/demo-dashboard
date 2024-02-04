import dayjs from "dayjs";

const TableTime = (date: any) => (date ? dayjs(date).format("HH:mm") : null);

export default TableTime;
