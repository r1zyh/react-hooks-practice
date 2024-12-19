import { Link } from "react-router-dom";
import { AppRoute } from "../const";

const hooks = [
  { id: "hooks", route: AppRoute.Hooks },
  { id: "useState", route: AppRoute.UseState },
  { id: "useEffect", route: AppRoute.UseEffect },
  { id: "useRef", route: AppRoute.UseRef },
];

export function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="nav__list">
          {hooks.map((hook) => (
            <li className="nav__list--item">
              <Link className="nav__link" to={hook.route}>
                {hook.id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
