// import Footer from "@/features/global/components/Footer"
import Section from "@/features/global/container/Section"
import TopSection from "@/features/global/container/TopSection"
import FilterBooks from "../components/FilterBooks"
import ListBooks from "@/features/global/container/ListBooks"

const Books = () => {
  return (
    <TopSection>
      <Section className="py-10">
        <FilterBooks />
        <ListBooks list={Array.from({ length: 20 })} />
      </Section>
      {/* <Footer /> */}
    </TopSection>
  )
}

export default Books