export default function Button({
    Icon,
    onClick,
}: {
    Icon: any;
    onClick: Function;
}) {
    return (
        <div
            className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200 shadow-sm"
            onClick={() => onClick()}
        >
            <Icon className="pointer-events-none" />
        </div>
    );
}
