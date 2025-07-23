type ServiceProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceProps) {
  return (
    <div className="p-4 bg-body text-foreground rounded-xl shadow border space-y-1">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
