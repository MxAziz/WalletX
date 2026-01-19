import Hero from "@/components/modules/homePage/Hero";
import SecuritySection from "@/components/modules/homePage/SecuritySection";
import WalletXHome from "@/components/modules/homePage/WalletXHome";

export default function Home() {
  return (
    <main>
        <Hero></Hero>
        <WalletXHome></WalletXHome>
        <SecuritySection></SecuritySection>
    </main>
  );
}