import Document, { Html, Head, Main, NextScript } from 'next/document'

// This File is used to render only once when the website is generated
// Here we can define, for example, the global fonts that needs to be rendered one once

export default class MyDocument extends Document{

    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}