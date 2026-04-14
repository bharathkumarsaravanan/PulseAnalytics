import ActiveLink from "all/components/ActiveLink";

type ItemType = {
    label: string,
    href: string,
    access: string[]
}

export default function DashboardSideBar({ items }: {items: ItemType[]}) {
  return (
    <nav className="space-y-2">
      {items.map((item, i) => (
        <div key={i + item.label}>
          <ActiveLink href={item.href}>{item.label}</ActiveLink>
          <br />
        </div>
      ))}
    </nav>
  );
}
