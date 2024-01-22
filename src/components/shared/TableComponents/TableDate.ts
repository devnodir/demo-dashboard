import dayjs from "dayjs";

const TableDate = (date: any) =>
    date ? dayjs(date).format("DD.MM.YYYY") : null;

export default TableDate;
