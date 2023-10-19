import { IIconProps } from "../types";

export function GraduateIcon({ className, onClick }: IIconProps) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			onClick={onClick}
		>
			<path
				d="M17.8615 11.7882L17.2338 10.8177C17.2064 10.7743 17.1742 10.7356 17.1404 10.7002V6.76999V6.76838C17.1404 5.73835 16.5675 4.81132 15.6453 4.34941L11.3561 2.20404C9.61149 1.33173 7.52891 1.33173 5.78428 2.20404L1.49517 4.34941C0.572963 4.80971 0 5.73674 0 6.76838C0 7.80003 0.572963 8.72545 1.49517 9.18736L2.43827 9.65892V12.9743C2.43827 14.4969 3.52626 15.7909 5.02625 16.0516L6.25261 16.264C6.97042 16.3896 7.69465 16.4507 8.41729 16.4507C9.13992 16.4507 9.8642 16.3879 10.582 16.264L11.8084 16.0516C13.3084 15.7909 14.3963 14.4969 14.3963 12.9743V9.8086L15.642 9.18575C15.7129 9.15034 15.7821 9.1101 15.8497 9.06987V10.7018C15.8159 10.7388 15.7837 10.7775 15.7563 10.8193L15.1286 11.7898C14.9516 12.0634 14.9387 12.3998 15.0949 12.6863C15.251 12.9727 15.539 13.1449 15.8657 13.1449H17.1195C17.4462 13.1449 17.7343 12.9743 17.8904 12.6863C17.9628 12.5527 17.9998 12.4094 17.9998 12.2662C18.0031 12.0988 17.9564 11.9363 17.8615 11.7882ZM13.112 12.9727C13.112 13.8676 12.4715 14.6288 11.5911 14.7817L10.3647 14.9942C9.07395 15.2179 7.7655 15.2179 6.47473 14.9942L5.24833 14.7817C4.36636 14.6288 3.72743 13.8676 3.72743 12.9727V10.3011L5.78589 11.3295C6.65821 11.7657 7.61422 11.9829 8.57183 11.9829C9.52944 11.9829 10.4854 11.7657 11.3577 11.3295L13.1136 10.4524V12.9727H13.112ZM15.0691 8.03501L10.78 10.1804C9.39585 10.8724 7.74458 10.8724 6.36047 10.1804L2.07132 8.03501C1.58044 7.79037 1.28916 7.31559 1.28916 6.76838C1.28916 6.22118 1.58205 5.7464 2.07132 5.50176L6.36047 3.358C7.74458 2.66595 9.39585 2.66595 10.78 3.358L15.0691 5.50176C15.5583 5.7464 15.8513 6.21957 15.8513 6.76838V6.76999C15.8529 7.31559 15.56 7.78876 15.0691 8.03501Z"
				fill="white"
			/>
		</svg>
	);
}
