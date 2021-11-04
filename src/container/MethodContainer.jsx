import React from "react";
import MethodList from '../components/app/ContentList';
import MethodControls from '../components/app/ContentControls';
import { getMethod } from "../services/MethodAPI";

class MethodContainer extends Component {
    state = {
        loading: true,
        content: []
    };

    async componentDidMount() {
        const content = await getMethod();
        this.setState({ content, loading: false })
    };

    render() {
        const { loading, content } = this.state;
        if(loading) return <h1>Loading...</h1>;
        return (
            <>
                <MethodList content={content} />
            </>
        );
    }
}

export default MethodContainer