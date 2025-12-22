export interface CustomHeaderProps {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: CustomHeaderProps) => {
  return (
    <div className="content-center">
      <h1 className="montserrat-bold">{title}</h1>

      {description && <p className="montserrat-light">{description}</p>}
    </div>
  );
};
