export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// Pick
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// Omit
type SmallProfile = Omit<DetailedProfile, 'height'>;
