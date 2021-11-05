import React, {Component} from "react";
import Content from '../components/app/Content'
import { getMethod } from "../services/MethodAPI";
import MethodControls from "../components/app/MethodControls";

class ContentContainer extends Component {
    state = {
        loading: true,
        contents: [],
				url: '',
				method: '',
				inputField: '',
    };

    async componentDidMount() {
        // const content = await getMethod();
        this.setState({loading: false })
    };

		handleUrlInput = (e) => {
			this.setState({ url: e.target.value });
		};

		handleRadioInput = (e) => {
			this.setState({ method: e.target.value });
		}

		handleInputField = (e) => {
			this.setState({ inputField: e.target.value });
		}

		handleSubmit = async (e) => {
			const {url, method, inputField} = this.state
			e.preventDefault();
			this.setState({ loading: true });
			if (method === 'GET') {
			const contents = await getMethod(url)
			this.setState({ contents, loading: false })
			} else if (method ==='POST') {
				const contents = await postMethod(url)
			this.setState({ contents, loading: false })
			// } else if (method ==='PATCH') {
			// 	const contents = await patchMethod(url)
			// this.setState({ contents, loading: false })
			// } else (method ==='DELETE') 
			// 	const contents = await deleteMethod(url)
			// this.setState({ contents, loading: false })
			
			console.log('METHOD', method)
		};

	}
    render() {
        const { loading, contents, url } = this.state;
        if(loading) return <h1>Loading...</h1>;
        return (
					<>
						<MethodControls 
						url = {url}
						onRadioInput={this.handleRadioInput}
						onUrlInput={this.handleUrlInput}
						onSubmit={this.handleSubmit} />  
						<Content contents={contents}/>
          </>
        );
    }
}

export default ContentContainer