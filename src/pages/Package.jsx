import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function Package() {
  const { name, service } = useParams();

  const pricingInfos = [
    {
      id: 1,
      name: "marketing",
      services: [
        {
          id: 1,
          service: "Influencer Marketing ",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 2,
          service: "Market Research",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 3,
          service: "Search Engine Marketing ",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 4,
          service: "Social Media Marketing",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 5,
          service: "Email Marketing",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 6,
          service: "Marketing Communications",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 7,
          service: "Affiliate Marketing",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 8,
          service: "Brand Awareness",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 9,
          service: "Loyalty Program",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 10,
          service: "Public Relations",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 11,
          service: "Content Marketing ",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 12,
          service: "Direct Marketing",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 13,
          service: "SEO",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 14,
          service: "Guerilla Marketing",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 15,
          service: "Global Marketing ",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 16,
          service: "Networking",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Pre-Sales",
      services: [
        {
          id: 17,
          service: "Finding the contacts",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 18,
          service: "Conducting competitor research",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 19,
          service: "Conducting customer analysis",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 20,
          service: "Prospecting & making appointments-pay-per-appointment",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 21,
          service: "Qualification leads",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 22,
          service: "Networking",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 23,
          service: "After making the contact",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 24,
          service: "Making discovery calls (knowing customer pain points)",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 25,
          service: "Performing product demos",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 26,
          service:
            "Drafting and delivering proposals(responding to RFI/RFP/RFQs)",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 27,
          service: "Enable sales team with qualified leads ",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 28,
          service: "Handover leads to sales",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 29,
          service: "Do pilots/proof of concepts",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 30,
          service: "After handing over to sales",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 31,
          service: "Prepare sales pitches/decks",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 32,
          service: "Drafting and delivery Contracts/SOWs/Changes to contacts",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 33,
          service:
            "After-sale partnership with customer until the implementation is successful",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Sales",
      services: [
        {
          id: 34,
          service: "Persuade leads to Customer conversions",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 35,
          service: "In-person meets",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 36,
          service: "Email/call follow-ups",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 37,
          service: "Relationship events",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 38,
          service: "Provide testimonials",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 39,
          service: "Know the hierarchy and customer potential",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 40,
          service: "Negotiation and closing-sales job",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 41,
          service: "Prep sign SOWs/Contacts",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 42,
          service: "Introduce & establish Account Managers",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 43,
          service: "On the off gauge the implementation success/failure",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 44,
          service: "Identify Strategic partnerships",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 45,
          service: "Networking ",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 46,
          service: "Insights to Product team",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 47,
          service: "Insights to Marketing team",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Account Management",
      services: [
        {
          id: 48,
          service: "Ensure Delivery",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 49,
          service: "Enable Organic Growth(refer Delight)",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 50,
          service: "Consistently Enrich Customer Relationships",

          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 51,
          service:
            "Constantly Manage Relationships with Decision Markers and Influencer",
          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
        {
          id: 52,
          service:
            "Provide Intel and Insights of Customers & Projects to the Sales & Pre-sales",
          plans: [
            {
              id: 1,
              planName: "Basic",
              color: "cyan-100",
              monthlyPrice: 100,
              quarterlyPrice: 270,
              annualPrice: 1000,
              benefits: [
                " Identification of relevant influencers",
                "Basic influencer outreach",
              ],
              offerings: [
                " Collaborations with influencers",
                "Content co-creation",
              ],
            },
            {
              id: 2,
              planName: "Premium",
              color: "orange-100",
              monthlyPrice: 200,
              quarterlyPrice: 540,
              annualPrice: 2000,
              benefits: [
                "Basic + enhanced influencer research and targeting",
                "Performance tracking and measurement",
              ],
              offerings: [
                " Custom influencer campaigns",
                "Advanced influencer analytics",
              ],
            },
            {
              id: 3,
              planName: "Elite",
              color: "yellow-100",
              monthlyPrice: 300,
              quarterlyPrice: 810,
              annualPrice: 3000,
              benefits: [
                " Premium + influencer relationship management",
                " Influencer network expansion",
              ],
              offerings: [
                " Dedicated influencer support",
                "Influencer program development",
              ],
            },
          ],
        },
      ],
    },
  ];

  const selectedMainService = pricingInfos.find(
    (service) =>
      service.name.toLowerCase().trim().replace(/\s+/g, "-") ===
      name.toLowerCase().trim().replace(/\s+/g, "-")
  );

  const selectedPlan = selectedMainService?.services?.find(
    (plan) =>
      plan?.service.toLowerCase().trim().replace(/\s+/g, "-") ===
      service?.toLowerCase().trim().replace(/\s+/g, "-")
  );

  return (
    <Layout>
      <Banner
        title={`${selectedPlan?.service} Pricing`}
        bg_img="https://i.ibb.co/W64yYcK/pricing.webp"
      ></Banner>
      <div className="max-w-screen-xl  mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 ">
        {selectedPlan?.plans?.map((plan) => (
          <div
            className={`p-5 flex flex-col justify-between gap-5 bg-${plan.color} rounded-lg shadow-lg`}
            key={plan.id}
          >
            <div>
              <h1 className="text-center text-[2rem]  font-semibold">
                {plan.planName}
              </h1>
              <ul className="">
                <h5 className="text-[1.3rem] text-gray-500 mt-4">Benefits</h5>
                {plan.benefits.map((benefit, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    {" "}
                    <HiOutlineCheckBadge className="mt-1 text-primary" />{" "}
                    {benefit}
                  </li>
                ))}
              </ul>
              <ul className="">
                <h5 className="text-[1.3rem] text-gray-500 mt-4">Offerings</h5>
                {plan.offerings.map((offering, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    {" "}
                    <HiOutlineCheckBadge className="mt-1 text-primary" />{" "}
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
            {/* plans */}
            <div className=" flex flex-col gap-2">
              <button className="flex w-full bg-gradient-to-t from-primary to-primary/80 text-lg font-semibold text-white px-6 py-2 justify-between items-center hover:translate-x-1 duration-200">
                $ {plan.monthlyPrice}/Month <BsArrowRight />
              </button>
              <button className="flex w-full bg-gradient-to-t from-primary to-primary/80 text-lg font-semibold text-white px-6 py-2 justify-between items-center hover:translate-x-1 duration-200">
                $ {plan.quarterlyPrice}/Quarter <BsArrowRight />
              </button>
              <button className="flex w-full bg-gradient-to-t from-primary to-primary/80 text-lg font-semibold text-white px-6 py-2 justify-between items-center hover:translate-x-1 duration-200">
                $ {plan.annualPrice}/Annual <BsArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
