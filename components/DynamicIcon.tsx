import * as FaIcons from "react-icons/fa";

type Props = {
  iconName: keyof typeof FaIcons; // ensures it's a valid Fa icon name
};

export default function DynamicIcon({ iconName }: Props) {
  const IconComponent = FaIcons[iconName];

  if (!IconComponent) return null; // fallback if icon not found

  return (
    <IconComponent className="text-xl text-white" size={15} color="white" />
  );
}
