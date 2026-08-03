import { Link } from "react-scroll";

interface FooterItem {
  name: string;
  id: string;
}

interface FooterColumnProps {
  title: string;
  items: FooterItem[] | string[];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-white">
        {title}
      </h3>

      <ul className="space-y-2">

        {items.map((item, index) => {

          if (typeof item === "string") {
            return (
              <li
                key={index}
                className="text-sm text-violet-200 hover:text-white cursor-pointer"
              >
                {item}
              </li>
            );
          }

          return (
            <li key={item.id}>
              <Link
                to={item.id}
                duration={500}
                offset={-80}
                className="cursor-pointer text-sm text-violet-200 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          );

        })}

      </ul>
    </div>
  );
};

export default FooterColumn;