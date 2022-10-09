import * as React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {generateId} from "./utils/react/generateRandomIndex";
import {Dropdown} from "./shared/Dropdown";

const LIST = [
    {value: ' some',},
    {value: 'other some'},
    {value: ' some',},
].map(generateId)

function AppComponent() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [title, setTitle] = React.useState('')

    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
             <Dropdown button={<button>Test</button>}>
                 <ul><li>1</li></ul>
             </Dropdown>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>)

