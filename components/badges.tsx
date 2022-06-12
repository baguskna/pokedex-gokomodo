import { cardBackground } from "../shared/helpers";

const Badge = ({ type }: any) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
      style={{
        backgroundColor: `${
          cardBackground[type.type.name as keyof typeof cardBackground]
        }`,
      }}
    >
      {type.type.name}
    </span>
  );
};

export default Badge;
