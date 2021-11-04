import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { PaymentInfo } from './components/PaymentInfo'
import GlobalStyles from './components/styles/Global'

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
    },
    mobile: '768px',
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <PaymentInfo />
            </>
        </ThemeProvider>
    )
}

export default App
