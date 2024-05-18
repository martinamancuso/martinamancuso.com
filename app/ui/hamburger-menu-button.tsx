import style from "./hamburger-menu-button.module.scss"

export function HamburgerMenuButton(
  { isEnabled, onClick }: 
  { isEnabled: boolean, onClick: Function }
) {
  return (
    <div 
      className={`${style.burger} ${isEnabled ? style.toggled : ""}`} 
      onClick={() => { onClick() }}
    >
      <div className={style.innerBurger}>
      </div>
    </div>
  );
}
