import React, {Component} from "react";
import Content from '../components/app/Content'
import { getMethod } from "../services/MethodAPI";
import MethodControls from "../components/app/MethodControls";

class ContentContainer extends Component {
    state = {
        loading: true,
				content: {},
        contents: [],
				url: ''
    };

    async componentDidMount() {
        // const content = await getMethod();
        this.setState({loading: false })
    };

		handleUrlInput = (e) => {
			this.setState({ url: e.target.value });
		};

		handleSubmit = async (e) => {
			e.preventDefault();
			this.setState({ loading: true });
			const contents = await getMethod(this.state.url);
			this.setState({ contents, loading: false });
		};

    render() {
        const { loading, contents, url } = this.state;
        if(loading) return <h1>Loading...</h1>;
        return (
					<>
						<MethodControls 
						url = {url}
						onUrlInput={this.handleUrlInput}
						onSubmit={this.handleSubmit} />  
						<Content contents={contents}/>
          </>
        );
    }
}

export default ContentContainer