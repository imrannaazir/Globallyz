import BenefitOfDigitalMarketing from "../components/MarketingService/BenefitOfDigitalMarketing";
import FAQs from "../components/MarketingService/FAQs";
import MarketingDetailsLeft from "../components/MarketingService/MarketingDetailsLeft";
import MarketingDetailsRight from "../components/MarketingService/MarketingDetailsRight";
import ProvidingServices from "../components/MarketingService/ProvidingServices";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";

export default function MarketingService() {
  return (
    <Layout>
      <Banner />
      <MarketingDetailsLeft />
      <MarketingDetailsRight />
      <BenefitOfDigitalMarketing />
      <ProvidingServices />
      <FAQs />
    </Layout>
  );
}
