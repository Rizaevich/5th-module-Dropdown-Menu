import * as React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { generateId } from "./utils/react/generateRandomIndex";
import { EColor, Text } from "./shared/Text";

const LIST = [
    { value: ' some', },
    { value: 'other some' },
    { value: ' some', },
].map(generateId)

function AppComponent() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [title, setTitle] = React.useState('')

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <br />
                <Text As="h1"  size={28} color={EColor.green}> Label1</Text>
                <Text As="div" size={16}> Label1</Text>
                <Text size={16} mobileSize={12} color={EColor.orange}> Label1</Text>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent />)


