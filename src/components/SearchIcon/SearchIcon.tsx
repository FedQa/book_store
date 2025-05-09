type SearchIconProps = {
    className?: string;
    pathColor?: string;
    iconSettings: {
        height?: number;
        width?: number;
    }
}

export const SearchIcon = (props: SearchIconProps) => {
    return (
        <svg
            className={props.className}
            width={props.iconSettings.width}
            height={props.iconSettings.height}
            viewBox="0 0 20 20">
            <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke={props.pathColor}
                fill="none"
                strokeWidth="2"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
};