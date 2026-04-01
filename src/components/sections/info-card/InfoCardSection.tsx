import { Container } from "@/src/components/layout/Container";
import { InfoCard } from "@/src/components/ui/InfoCard/InfoCard";
import styles from "./InfoCardSection.module.css";

export function InfoCardSection() {
  return (
    <section className={styles.section}>
      <Container size="full">
        <InfoCard
          title="Global Expo"
          description="TEXPO LAND connects global innovators, startups, and industry leaders in one destination to shape the future of technology."
          imageUrl="/images/global-expo-floor.png"
        />
      </Container>
    </section>
  );
}
