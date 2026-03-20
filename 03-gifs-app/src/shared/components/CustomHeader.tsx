export interface CustomHeaderProps {
  title: string;
  description?: string;
}

export const CustomHeader = ({
  title,
  description = 'Descubre y comparte el gif perfecto para tus momentos',
}: CustomHeaderProps) => {
  return (
    <div className="content-center">
      <h1 className="montserrat-bold">{title}</h1>

      {description && <p className="montserrat-light">{description}</p>}
    </div>
  );
};
