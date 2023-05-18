import ServicePricing from "../components/Pricing/ServicePricing";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";

export default function Pricing() {
  return (
    <Layout>
      <Banner title="Service Pricing" />
      <ServicePricing />
    </Layout>
  );
}
