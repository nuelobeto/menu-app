import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
	return (
		<BrowserRouter>
			<div className="w-screen h-screen bg-[#D4D4D4]">
				<AppRouter />
			</div>
		</BrowserRouter>
	);
};

export default App;
