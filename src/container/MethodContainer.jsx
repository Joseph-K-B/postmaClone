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
		username: '',
		password: '',
		headers: '',
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

		handleUsernameInput = (e) => {
			this.setState({ username: e.target.value });
		}

		handlePasswordInput = (e) => {
			this.setState({ password: e.target.value });
		}

		handleHeaderInput = (e) => {
			this.setState({ headers: e.target.value });
		}

		handleSubmit = async (e) => {
			const {url, method, inputField, methodList, username, password, headers} = this.state
			e.preventDefault();
			this.setState({ loading: true });

			if (method === 'GET') {
			const contents = await getMethod(url, method, inputField, headers, username, password)
			this.setState({ 
				methodList: [...methodList, {method, url}],
				loading: false,
				// headers: {headers},
				username: {username},
				password: {password},
				contents, 
			})
			} else {
				const contents = await fetchMethod(url, method, inputField, headers, username, password)
			this.setState({ 
				methodList: [...methodList, {method, url}],
				loading: false, 
				headers: {headers},
				username: {username},
				password: {password}, 
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
				username = {username}
				password = {password}
				headers = {headers}
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
