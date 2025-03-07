import BenefitOfDigitalMarketing from "../components/MarketingService/BenefitOfDigitalMarketing";
import FAQs from "../components/MarketingService/FAQs";
import ProvidingServices from "../components/MarketingService/ProvidingServices";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";

// eslint-disable-next-line react/prop-types
export default function MarketingService({ service }) {
  const { name, description, services, faqs } = service || {};
  return (
    <Layout>
      <Banner
        title={name}
        bg_img="https://i.ibb.co/ZVkpZRT/Digital-marketing.webp"
      />
      <BenefitOfDigitalMarketing
        name={name}
        description={description}
        url="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/history-1.png"
      />
      <ProvidingServices name={name} services={services} />
      <FAQs faqs={faqs} name={name} />
    </Layout>
  );
}
