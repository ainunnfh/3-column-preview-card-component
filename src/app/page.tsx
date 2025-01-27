import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:h-screen">
      <Card
        color="[#e38826]"
        image="/icon-sedans.svg"
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        color="[#006970]"
        image="/icon-suvs.svg"
        title="Suvs"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        color="[#004241]"
        image="/icon-luxury.svg"
        title="Luxury"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
    </div>
  );
}
