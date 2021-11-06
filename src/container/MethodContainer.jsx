import React, {Component} from "react";
import Content from '../components/app/Content'
import { getMethod, postMethod, patchMethod, deleteMethod  } from "../services/MethodAPI";
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

		// handleHistory = (e) => {
		// 	const { method, url, methodList } = this.state
		// 	this.setState({ methodList: e.methodList.value })
		// }

		handleSubmit = async (e) => {
			const {url, method, inputField, methodList} = this.state
			e.preventDefault();
			this.setState({ loading: true });
			if (method === 'GET') {
			const contents = await getMethod(url)
			this.setState({ methodList: methodList.push(method, url), contents, loading: false, })
			console.log('METHODLIST', methodList)
			} else if (method ==='POST') {
				const contents = await postMethod(url, inputField)
			this.setState({ methodList, contents, loading: false })
			} else if (method ==='PATCH') {
				const contents = await patchMethod(url, inputField)
			this.setState({ methodList, contents, loading: false })
			} else if (method ==='DELETE') {
				const contents = await deleteMethod(url)
			this.setState({ contents, loading: false })}
			
			console.log('METHOD', method, 'INPUT FIELD', inputField)
		};

	
    render() {
        const { loading, contents, url, inputField, methodList } = this.state;
        if(loading) return <h1>Loading...</h1> 
		
			return (
			<>
				<MethodControls
				url = {url}
				inputField = {inputField}
				methodList = {methodList} 
				onUrlInput={this.handleUrlInput}
				onRadioInput={this.handleRadioInput}
				onObjectInput={this.handleInputField}
				onSubmit={this.handleHistory}
				onSubmit={this.handleSubmit} />
				<section>
					<MethodList />  
					<Content contents={contents}/>
				</section>
          </>
        );
		}
    }


export default ContentContainer