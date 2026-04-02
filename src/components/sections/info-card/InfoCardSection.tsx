import { Container } from "@/src/components/layout/Container";
import { InfoCard } from "@/src/components/ui/InfoCard/InfoCard";
import styles from "./InfoCardSection.module.css";

export function InfoCardSection() {
  return (
    <section className={styles.section}>
      <Container size="full">
        <InfoCard
          title="Global Expo"
          description="TEXPO LAND is considered a launchpad that brings together investors, innovators, and technology industry leaders from around the world, with the goal of driving digital transformation in Syria and the region at large, and achieving sustainable growth for businesses and investors. We are committed to facilitating business growth by promoting innovative technological solutions, strengthening strategic partnerships, and enabling cross-border collaboration. Through our events, we aim to accelerate the adoption of modern technologies and open new opportunities and markets for both investors and companies alike.."
          imageUrl="/images/global-expo-floor.png"
        />
      </Container>
    </section>
  );
}
