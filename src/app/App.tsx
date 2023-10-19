import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

import {
	CommunityPage,
	ErrorBoundary,
	HomePage,
	Page404,
	WatchPage,
} from "pages";

import { Layout } from "widgets";

function App() {
	return (
		<BrowserRouter>
			<ErrorBoundary>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path={routes.home.path} element={<HomePage />} />
						<Route path={routes.community.path} element={<CommunityPage />} />
						<Route path={routes.watch.path} element={<WatchPage />} />
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</ErrorBoundary>
		</BrowserRouter>
	);
}

export default App;
