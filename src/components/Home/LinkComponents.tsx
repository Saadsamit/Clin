import { Link } from "react-scroll";

const links = [
  {
    link: "about",
    text: "about",
  },
  {
    link: "solutions",
    text: "our solutions",
  },
  {
    link: "action",
    text: "in action",
  },
  {
    link: "technology",
    text: "technology",
  },
  {
    link: "benefits",
    text: "Benefits",
  },
  {
    link: "case",
    text: "Case Use",
  },
];

type TLinkComponents = {
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LinkComponents = ({ setShow }: TLinkComponents) => {
  const onClick = () => {
    return setShow && setShow(false);
  };
  return (
    <ul className="flex flex-col md:flex-row gap-5">
      {links.map((link) => (
        <li key={link.text}>
          <Link
            activeClass="nav-active"
            to={link.link}
            spy={true}
            smooth={true}
            duration={250}
            onClick={onClick}
            className={`text-[#94a3b8] nav-link relative capitalize cursor-pointer`}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkComponents;
