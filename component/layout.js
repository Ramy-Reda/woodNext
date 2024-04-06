import Head from 'next/head'
import Footer from './footer'
import Nav from './nav'

export default function Layout(props) {
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}
