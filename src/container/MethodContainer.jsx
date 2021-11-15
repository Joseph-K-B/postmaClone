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
		contentType: '',
    };

 		componentDidMount() {
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

		handleTokenInput = (e) => {
			this.setState({ username: e.target.value });
		}

		handleContentTypeInput = (e) => {
			this.setState({ contentType: e.target.value });
		}

		handleSubmit = async (e) => {
			const {url, method, inputField, methodList, token, contentType} = this.state
			e.preventDefault();
			this.setState({ loading: true });

			if (method === 'GET') {
			const contents = await getMethod(url, method, inputField, token,  contentType)
			this.setState({ 
				methodList: [...methodList, {method, url}],
				loading: false,
				// headers: {headers},
				token: {token},
				contents, 
			})
			} else {
				const contents = await fetchMethod(url, method, inputField, headers, username, password)
			this.setState({ 
				methodList: [...methodList, {method, url}],
				loading: false, 
				token: {token},
				contentType: {contentType}, 
				contents, 
			})
		}
	}
	
    render() {
        const { loading, contents, url, inputField, methodList, username, password, headers } = this.state;
        if(loading) return <h1>Loading...</h1>		
			return (
			<>
				<MethodControls
				url = {url}
				inputField = {inputField}
				methodList = {methodList} 
				token = {token}
				contentType = {contentType}
				onUrlInput= {this.handleUrlInput}
				onRadioInput= {this.handleRadioInput}
				onObjectInput= {this.handleInputField}
				onUsernameInput= {this.handleUsernameInput}
				onPasswordInput= {this.handlePasswordInput}
				onHeaderInput= {this.handleHeaderInput}
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
