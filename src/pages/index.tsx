import Banner from "../components/Banner"
import Head from "../components/Head"
import Header from "../components/Header"
import ListCategories from "../components/ListCategories"

export default function Home() {
  return (
    <div>
      <Head title="Sidequest Commerce | Compre os Gadgets" />
      <Header />
      <Banner />
      <ListCategories />
    </div>
  )
}
