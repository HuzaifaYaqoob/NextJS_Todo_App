
import Header from './Header'

const AppBase = (props) => {
    return (
        <>
            <main>
                <Header />
                {props.children}
            </main>
        </>
    )
}

export default AppBase