import logoimg from '../../assets/logo.svg'
import { Container, Content } from './style'



export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoimg} alt="dt money" />
                <button>
                    Nova transaçao
                </button>
            </Content>
        </Container>
    )
}