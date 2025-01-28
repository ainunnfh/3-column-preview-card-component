import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Card
        color="orange"
        image="/icon-sedans.svg"
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        color="teal"
        image="/icon-suvs.svg"
        title="Suvs"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        color="dark-green"
        image="/icon-luxury.svg"
        title="Luxury"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
    </div>
  );
}
