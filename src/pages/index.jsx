import Categories from "@/sections/Categories";
import Contacts from "@/sections/Contacts";
import News from "@/sections/News";
import Hits from "@/sections/Hits";
import Modifications from "@/sections/Modifications";
import Reviews from "@/sections/Reviews";
import About from "@/sections/About";
import MainSlider from "@/sections/MainSlider";
import Why from "@/sections/Why";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";

export const metadata = {
  title: ' Главная'
}

export default function () {
  return (
    <>
      <h1 className='visually-hidden'>Main</h1>
      <MainSlider />
      <Categories mainSectionInPage={false} headerIsVisible={false} />
      <About />
      <Hits />
      <Why />
      <Modifications />
      <Contacts />
      <News />
      <Reviews />
      <ModalCallbackWindow />
    </>
  )
}
