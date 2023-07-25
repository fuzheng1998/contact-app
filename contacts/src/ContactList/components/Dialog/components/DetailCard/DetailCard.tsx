interface DetailCardProps {
    label: string;
    value: string;
}
function DetailCard({
    label,
    value
                    }: DetailCardProps) {
    return (
        <div className={"flex flex-col bg-blue-200 mx-2.5 my-3 px-3 py-2 rounded-md"}>
        <p>{label}</p>
        <p>{value}</p>
        </div>
    );
}
export default DetailCard;