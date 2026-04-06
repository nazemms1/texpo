import { Container } from "@/src/components/layout/Container";
import { InfoCard } from "@/src/components/ui/InfoCard/InfoCard";
import styles from "./InfoCardSection.module.css";

interface InfoCardItem {
  title?: string;
  description?: string;
  image?: string;
}

interface InfoCardSectionProps {
  items?: InfoCardItem[];
}

export function InfoCardSection({ items }: InfoCardSectionProps) {
  const displayItems = items?.length ? items : [
    {
      title: "Our Message",
      description: "TEXPO LAND is considered a launchpad that brings together investors, innovators, and technology industry leaders from around the world, with the goal of driving digital transformation in Syria and the region at large, and achieving sustainable growth for businesses and investors. We are committed to facilitating business growth by promoting innovative technological solutions, strengthening strategic partnerships, and enabling cross-border collaboration. Through our events, we aim to accelerate the adoption of modern technologies and open new opportunities and markets for both investors and companies alike..",
      image: "/images/global-expo-floor.png"
    }
  ];

  return (
    <section className={styles.section}>
      <Container size="full" className={styles.container}>
        {displayItems.map((item, index) => (
          <div key={index} style={{ marginBottom: index < displayItems.length - 1 ? '2rem' : 0 }}>
            <InfoCard
              title={item.title!}
              description={item.description!}
              imageUrl={item.image!}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
