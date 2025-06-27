/*
=========================================================
* NO TRACE EXPLORER - 企业产品数据配置
=========================================================

* 修改自 Vue Material Kit 2
* 用于展示 NO TRACE EXPLORER 的核心产品和服务

=========================================================
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";

export default [
  {
    heading: "ラボ | LAB",
    description:
      "研究開発・イノベーションサービス。最先端技術と創造的アイデアで新しい価値を創造します",
    items: [
      {
        image: imgFeatures,
        title: "エクスペリエンスデザイン",
        subtitle: "体験設計サービス",
        route: "/lab",
        pro: false
      },
      {
        image: `${imagesPrefix}/projects.jpg`,
        title: "イノベーション開発",
        subtitle: "総合ソリューション",
        route: "/lab",
        pro: false
      },
      {
        image: imgContent,
        title: "プロフェッショナルコンサルティング",
        subtitle: "専門コンサルティング",
        route: "/lab",
        pro: false
      },
      {
        image: imgStat,
        title: "技術研究・市場分析",
        subtitle: "データドリブン分析",
        route: "/lab",
        pro: false
      }
    ]
  },
  {
    heading: "珈琲 | COFFEE",
    description: "コーヒー関連事業。高品質コーヒー商品の企画開発から文化普及まで",
    items: [
      {
        image: imgPricing,
        title: "高品質コーヒー商品開発",
        subtitle: "商品企画・開発",
        route: "/coffee",
        pro: false
      },
      {
        image: imgBlogPosts,
        title: "コーヒー文化の探求と普及",
        subtitle: "文化研究・普及活動",
        route: "/coffee",
        pro: false
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "専門的コーヒー体験サービス",
        subtitle: "体験デザイン",
        route: "/coffee",
        pro: false
      },
      {
        image: `${imagesPrefix}/logo-area.jpg`,
        title: "サプライチェーン構築",
        subtitle: "流通システム開発",
        route: "/coffee",
        pro: false
      }
    ]
  },
  {
    heading: "クラブ | CLUB",
    description:
      "会員制コミュニティサービス。専門的なネットワーキングと文化交流プラットフォーム",
    items: [
      {
        image: imgTeam,
        title: "会員限定体験イベント",
        subtitle: "限定イベント企画",
        route: "/club",
        pro: false
      },
      {
        image: `${imagesPrefix}/general-cards.jpg`,
        title: "専門的ネットワーキング",
        subtitle: "プロフェッショナル交流",
        route: "/club",
        pro: false
      },
      {
        image: imgTestimonials,
        title: "文化交流プラットフォーム",
        subtitle: "国際文化交流",
        route: "/club",
        pro: false
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        title: "VIPサービス・特典",
        subtitle: "会員限定特典",
        route: "/club",
        pro: false
      }
    ]
  }
];