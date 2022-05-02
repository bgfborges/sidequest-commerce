import NextHead from "next/head";

// This Component goals to offer the Application the feature of adding the Title to the Page
// But, at the same time, make the only one focus of possible problems with the next/head (DDD principle of best practices)

type HeadProps = {
    title: string;
}

export default function Head({title}: HeadProps){
    return(
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    )
}