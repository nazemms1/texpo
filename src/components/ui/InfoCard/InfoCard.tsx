"use client";

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
  title = "",
  description = "",
  imageUrl,
  priority = false,
  className = "",
}: InfoCardProps) {
  const safeTitle = title || "";
  const titleParts = safeTitle.trim().split(/\s+/);
  const firstPart = titleParts[0] || "";
  const restPart = titleParts.slice(1).join(" ");

  return (
    <Box className={`${styles.infoCard} ${className}`} pos="relative">
      <img
        src={imageUrl || "/logos/texpo.svg"}
        alt={safeTitle}
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover" 
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/logos/texpo.svg";
        }}
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
              {firstPart}
            </Title>
            {firstPart && (
              <Box
                h={4}
                bg="rgba(255, 255, 255, 0.9)"
                className={styles.line}
                m={0}
              />
            )}
          </Box>
          {restPart && (
            <Title order={2} m={0} c="white" fw={700} className={styles.titlePart}>
              {restPart}
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
