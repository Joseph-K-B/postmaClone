import React, {Component} from "react";
import Content from '../components/app/Content'
import { getMethod, fetchMethod  } from "../services/MethodAPI";
import MethodControls from "../components/app/MethodControls";
import css from '../styles/method-container.css';
import MethodList from '../components/app/MethodList'

class ContentContainer extends Component {
    state = {
        loading: true,
		methodList: [],
        contents: [],
		url: '',
		method: '',
		inputField: '',
		token: '',
    };

 		componentDidMount() {
        this.setState({loading: false })
    };

		handleUrlInput = (e) => {
			this.setState({ url: e.target.value });
		};

		handleRadioInput = (e) => {
			this.setState({ method: e.target.value });
		};

		handleInputField = (e) => {
			this.setState({ inputField: e.target.value });
		};

		handleTokenInput = (e) => {
			this.setState({ token: e.target.value });
		};

		handleSubmit = async (e) => {
			const {url, method, inputField, methodList, token} = this.state
			e.preventDefault();
			this.setState({ loading: true });

			if (method === 'GET') {
			const contents = await getMethod(url, method, inputField, token)
			this.setState({ 
				methodList: [...methodList, {method, url}],
				loading: false,
				token: {token},
				contents, 
			})
			} else {
				const contents = await fetchMethod(url, method, inputField, token, )
			this.setState({ 
				methodList: [...methodList, {method, url}],
				loading: false, 
				token: {token},
				contents, 
			})
		}
	}
	
    render() {
        const { loading, contents, url, inputField, methodList, token } = this.state;
        if(loading) return <h1>Loading...</h1>		
			return (
			<>
				<MethodControls
				url = {url}
				inputField = {inputField}
				methodList = {methodList} 
				token = {token}
				onUrlInput= {this.handleUrlInput}
				onRadioInput= {this.handleRadioInput}
				onObjectInput= {this.handleInputField}
				onTokenInput= {this.handleTokenInput}
				onSubmit= {this.handleSubmit} 
				/>
				<section>
					<div className={css.history}>
					<MethodList arr = {methodList}/>									  
					</div>
					<div className={css.response}>
					<Content contents={contents}/>
					</div>
				</section>
          </>
        );
		}
    }
		


export default ContentContainer;
