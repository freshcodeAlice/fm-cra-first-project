import UserList from './UserList/UserList';
import Container from './Grid/Container';
import Row from './Grid/Row';
import Column from './Grid/Column';

function App() {
 
    return (
        <Container>
            <Row>
                <Column colNum={12}>
                    <div>Content 1</div>
                </Column>
            </Row>
            <Row>
                <Column colNum={3}>
                    <div>Content 2</div>
                    </Column>
                <Column colNum={3}>
                    <div>Content 3</div>
                </Column>
                <Column colNum={3}>
                    <div>Content 2</div>
                    </Column>
                <Column colNum={3}>
                    <div>Content 3</div>
                </Column>
            </Row>
            <Row>
                <Column colNum={4}>
                    <div>Content 2</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 3</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 3</div>
                </Column>
            </Row>
        </Container>
    )
}


export default App;


/*
Створити компоненту FlexContainer, яка відображає всі передані їй елменти як флекс-дітей. При цьому flex-direction, align-items, justify-content мають передаватись цій компоненті як пропси

*/