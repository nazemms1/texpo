"use client";

import Image from "next/image";
import { Box, Stack, Text, Title } from "@mantine/core";
import styles from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  priority?: boolean;
  className?: string;
};

export function InfoCard({
  title,
  description,
  imageUrl,
  priority = false,
  className = "",
}: InfoCardProps) {
  return (
    <Box className={`${styles.infoCard} ${className}`} pos="relative">
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority={priority}
        style={{ objectFit: "cover" }}
      />

      <Box
        pos="absolute"
        top={0}
        left={0}
        right={0}
        h="42%"
        className={styles.topOverlay}
      />
      <Box
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        h="42%"
        className={styles.bottomOverlay}
      />

      <Stack pos="absolute" inset={0} className={styles.content}>
        <Box className={styles.titleContainer}>
          <Box className={styles.titleTopRow}>
            <Title order={2} m={0} c="white" fw={700} className={styles.titlePart}>
              {title.split(' ')[0]}
            </Title>
            <Box
              h={4}
              // w={2}
              bg="rgba(255, 255, 255, 0.9)"
              className={styles.line}
              m={0}
            />
          </Box>
          {title.split(' ').length > 1 && (
            <Title order={2} m={0} c="white" fw={700} className={styles.titlePart}>
              {title.split(' ').slice(1).join(' ')}
            </Title>
          )}
        </Box>

        <Box mt="auto">
          <Text   className={styles.description}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
