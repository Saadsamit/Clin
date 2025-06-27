const links = [
  {
    link: "1",
    text: "about",
  },
  {
    link: "",
    text: "our solutions",
  },
  {
    link: "",
    text: "in action",
  },
  {
    link: "",
    text: "technology",
  },
  {
    link: "",
    text: "Benefits",
  },
  {
    link: "",
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
          <a
            onClick={onClick}
            className={`text-[#94a3b8] nav-link relative capitalize cursor-pointer ${
              link.link == "1" && "nav-active"
            }`}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkComponents;
