export interface CommunityMember {
  id: number;
  name: string;
  avatarUrl: string;
  online: boolean;
}

export const communityMembersMock: CommunityMember[] = [
  {
    id: 1,
    name: "Ana Pescadora",
    avatarUrl: "https://i.pravatar.cc/150?u=anapescadora",
    online: true,
  },
  {
    id: 2,
    name: "Zezinho Cozinheiro",
    avatarUrl: "https://i.pravatar.cc/150?u=zezinhocozinheiro",
    online: false,
  },
  {
    id: 3,
    name: "Maria Lourdes",
    avatarUrl: "https://i.pravatar.cc/150?u=marialourdes",
    online: true,
  },
  {
    id: 4,
    name: "Dona Benta",
    avatarUrl: "https://i.pravatar.cc/150?u=donabenta",
    online: true,
  },
  {
    id: 5,
    name: "Chef Jão",
    avatarUrl: "https://i.pravatar.cc/150?u=chefjao",
    online: false,
  },
  {
    id: 6,
    name: "Tia Anastácia",
    avatarUrl: "https://i.pravatar.cc/150?u=tiaanastacia",
    online: true,
  },
];
