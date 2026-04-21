import ActiveLink from "all/components/ActiveLink";

type ItemType = {
    label: string,
    href: string,
    access: string[]
}

export default function DashboardSideBar({ items, role }: {items: ItemType[], role: string}) {
  const allowedItems = items.filter(item => item.access.includes(role));
  return (
    <nav className="space-y-2">
      {allowedItems.map((item, i) => (
        <div key={i + item.label}>
          <ActiveLink href={item.href}>{item.label}</ActiveLink>
          <br />
        </div>
      ))}
    </nav>
  );
}
