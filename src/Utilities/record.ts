export {};

// Record<K, T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Kanagawa' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: 'Tokyo', confirmed_cases: 1960 },
  Chiba: { kanji_name: 'Chiba', confirmed_cases: 249 },
  Kanagawa: { kanji_name: 'Kanagawa', confirmed_cases: 1000 },
  Shiga: { kanji_name: 'Shiga', confirmed_cases: 13 },
};
