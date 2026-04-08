import { Container } from "@/src/components/layout/Container";
import { InfoCard } from "@/src/components/ui/InfoCard/InfoCard";
import styles from "./InfoCardSection.module.css";
import { Stack, Box } from "@mantine/core";

import { getImageUrl } from "@/src/lib/helpers";

interface InfoCardItem {
  title?: string;
  description?: string;
  image?: any;
  media?: any;
}

interface InfoCardSectionProps {
  items?: InfoCardItem[];
  loading?: boolean;
}

export function InfoCardSection({ items, loading }: InfoCardSectionProps) {
  if (loading && (!items || items.length === 0)) return null;

  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container size="full" className={styles.container}>
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: index < items.length - 1 ? '2rem' : 0 }}>
            <InfoCard
              title={item.title!}
              description={item.description!}
              imageUrl={getImageUrl(item.media || item.image)}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
