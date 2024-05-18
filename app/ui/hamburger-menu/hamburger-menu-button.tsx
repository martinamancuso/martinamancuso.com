import style from "./hamburger-menu-button.module.scss";

export function HamburgerMenuButton({
  isEnabled,
  onClick,
  className,
}: {
  isEnabled: boolean;
  onClick: Function;
  className: string;
}) {
  return (
    <div
      className={`${className} ${style.burger} ${isEnabled ? style.toggled : ""}`}
      onClick={() => {
        onClick();
      }}
    >
      <div className={style.innerBurger}></div>
    </div>
  );
}
