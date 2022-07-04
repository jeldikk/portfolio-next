const skillsList = [
  {
    name: "Python",
    experience: "4+",
    icon: "",
    rating: 3,
    isFeatured: true,
  },
  {
    name: "HTML",
    experience: "",
    icon: "",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "NodeJs",
    experience: "",
    icon: "",
    rating: 4,
    isFeatured: true,
  },
  {
    name: "React",
    experience: "",
    icon: "",
    rating: 3.5,
    isFeatured: true,
  },
  {
    name: "Bootstrap",
    experience: "",
    icon: "",
    rating: 4,
    isFeatured: true,
  },
  {
    name: "",
    experience: "",
    icon: "",
    rating: 4,
    isFeatured: true,
  },
  {
    name: "Redux",
    experience: "",
    icon: "",
    rating: 4,
    isFeatured: false,
  },
  {
    name: "D3",
    experience: "",
    icon: "",
    rating: 4,
    isFeatured: false,
  },
];

export function getFeaturedSkills() {
  return skillsList.filter((s) => s.isFeatured);
}
