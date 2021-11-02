import { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./componentes/formularioCadastro/formularioCadastro";

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>pagina de formulário</h1>;
				<FormularioCadastro />;
			</Fragment>
		);
	}
}

export default App;
