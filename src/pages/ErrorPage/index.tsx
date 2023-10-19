import React, { ErrorInfo, ReactNode, Suspense } from "react";

import { Link } from "react-router-dom";

import cn from "classnames";

interface ErrorBoudnaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<
	ErrorBoudnaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoudnaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			return (
				<Suspense fallback={<div>loading...</div>}>
					<div
						className={cn(
							"h-screen w-full bg-black text-[#EF7B3C]",
							"flex flex-col justify-center items-center text-[40px]"
						)}
					>
						<h1>Something went wrong</h1>
						<Link className="text-xl underline" to={"/test2"}>
							Back to main!
						</Link>
						<button
							className="mt-5 text-2xl underline"
							onClick={() => location.reload()}
						>
							Reload Page!
						</button>
					</div>
				</Suspense>
			);
		}

		return children;
	}
}
