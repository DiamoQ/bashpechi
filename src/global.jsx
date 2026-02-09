import '@/styles'
import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/layouts/Footer"


export default function (props) {
    const {
        children,
        title,
    } = props;

  return (
    <>
        <Head htmlAttributes={{lang: 'ru'}}>
            <title>Башпечи | {title}</title>
            <base href="/bashpechi/"/>
            <script src='/src/main.js' type="module"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <Header/>
        <Content>{children}</Content>
        <MobileMenu />
      <Footer />
    </>
  )
}
