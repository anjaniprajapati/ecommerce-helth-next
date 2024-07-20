import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header"
import TopCategories from "./topcategories";
import TopProducts from "./topproducts"


export default function Home() {
  return (
    <>
      <Header/>
      <TopCategories/>
      <TopProducts/>
    </>
  );
}
