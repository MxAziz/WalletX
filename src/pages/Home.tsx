import Hero from "@/components/modules/homePage/Hero";
import NewsletterSection from "@/components/modules/homePage/NewsletterSection";
import SecuritySection from "@/components/modules/homePage/SecuritySection";
import StatsSection from "@/components/modules/homePage/StatsSection";
import WalletXHome from "@/components/modules/homePage/WalletXHome";

export default function Home() {
  return (
    <main>
        <Hero></Hero>
        <WalletXHome></WalletXHome>
        <SecuritySection></SecuritySection>
        <StatsSection></StatsSection>
        <NewsletterSection></NewsletterSection>
    </main>
  );
}